import { Track } from "../../domain/entities/Track";
import { IAudioPort } from "../../domain/ports/IAudioPort";
import { IStoragePort } from "../../domain/ports/IStoragePort";
import { IPlaylistPort } from "../../domain/ports/IPlaylistPort";
import { PlayerState, initialPlayerState } from "../../domain/entities/PlayerState";

export type PlayerStateListener = (state: PlayerState) => void;

export class PlayerService {
    private state: PlayerState;
    private listeners: Set<PlayerStateListener> = new Set();

    constructor(
        private audioPort: IAudioPort,
        private storagePort: IStoragePort,
        private playlistPort: IPlaylistPort
    ) {
        this.state = {
            ...initialPlayerState,
            volume: this.storagePort.getVolume(),
            isMuted: this.storagePort.getMutedState(),
        };

        this.setupAudioCallbacks();
    }

    private setupAudioCallbacks(): void {
        this.audioPort.onTimeUpdate((time) => {
            const duration = this.audioPort.getDuration();
            this.updateState({
                currentTime: time,
                duration,
                progress: duration > 0 ? time / duration : 0,
            });
        });

        this.audioPort.onEnded(() => {
            this.playNext();
        });

        this.audioPort.onError((error) => {
            console.error("Audio error:", error);
            this.updateState({ isLoading: false, isPlaying: false });
        });

        this.audioPort.onLoadedMetadata((duration) => {
            this.updateState({ duration, isLoading: false });
        });
    }

    private updateState(partial: Partial<PlayerState>): void {
        this.state = { ...this.state, ...partial };
        this.listeners.forEach((listener) => listener(this.state));
    }

    subscribe(listener: PlayerStateListener): () => void {
        this.listeners.add(listener);
        // Emit current state immediately
        listener(this.state);
        return () => this.listeners.delete(listener);
    }

    getState(): PlayerState {
        return this.state;
    }

    async initialize(): Promise<void> {
        try {
            const playlist = await this.playlistPort.getDefaultPlaylist();
            const randomTrack = this.playlistPort.getRandomTrack(playlist);
            const trackIndex = playlist.tracks.findIndex((t) => t.id === randomTrack.id);

            this.updateState({
                playlist,
                currentTrack: randomTrack,
                currentTrackIndex: trackIndex,
            });
        } catch (error) {
            console.error("Failed to initialize player:", error);
        }
    }

    async play(): Promise<void> {
        if (!this.state.currentTrack?.previewUrl) return;

        this.updateState({ isLoading: true });

        try {
            if (this.state.isPaused && this.state.currentTime > 0) {
                this.audioPort.resume();
            } else {
                await this.audioPort.play(this.state.currentTrack.previewUrl);
            }

            this.audioPort.setVolume(this.state.isMuted ? 0 : this.state.volume);
            this.updateState({ isPlaying: true, isPaused: false, isLoading: false });
        } catch (error) {
            console.error("Failed to play:", error);
            this.updateState({ isLoading: false });
        }
    }

    pause(): void {
        this.audioPort.pause();
        this.updateState({ isPlaying: false, isPaused: true });
    }

    async playTrack(track: Track): Promise<void> {
        if (!track.previewUrl) return;

        const trackIndex = this.state.playlist?.tracks.findIndex((t) => t.id === track.id) ?? 0;

        this.updateState({
            currentTrack: track,
            currentTrackIndex: trackIndex,
            isLoading: true,
            currentTime: 0,
            progress: 0,
        });

        try {
            await this.audioPort.play(track.previewUrl);
            this.audioPort.setVolume(this.state.isMuted ? 0 : this.state.volume);
            this.storagePort.saveLastTrackId(track.id);
            this.updateState({ isPlaying: true, isPaused: false, isLoading: false });
        } catch (error) {
            console.error("Failed to play track:", error);
            this.updateState({ isLoading: false });
        }
    }

    async playNext(): Promise<void> {
        if (!this.state.playlist) return;

        const { track, index } = this.playlistPort.getNextTrack(
            this.state.playlist,
            this.state.currentTrackIndex,
            this.state.shuffleEnabled
        );

        await this.playTrack(track);
        this.updateState({ currentTrackIndex: index });
    }

    async playPrevious(): Promise<void> {
        if (!this.state.playlist) return;

        // Si estamos más de 3 segundos en la canción, reiniciar
        if (this.state.currentTime > 3) {
            this.audioPort.seek(0);
            return;
        }

        const prevIndex =
            this.state.currentTrackIndex === 0
                ? this.state.playlist.tracks.length - 1
                : this.state.currentTrackIndex - 1;

        await this.playTrack(this.state.playlist.tracks[prevIndex]);
        this.updateState({ currentTrackIndex: prevIndex });
    }

    seek(time: number): void {
        this.audioPort.seek(time);
        this.updateState({ currentTime: time });
    }

    seekToProgress(progress: number): void {
        const time = progress * this.state.duration;
        this.seek(time);
    }

    setVolume(volume: number): void {
        const clampedVolume = Math.max(0, Math.min(1, volume));
        this.audioPort.setVolume(this.state.isMuted ? 0 : clampedVolume);
        this.storagePort.saveVolume(clampedVolume);
        this.updateState({ volume: clampedVolume });
    }

    toggleMute(): void {
        const newMuted = !this.state.isMuted;
        if (newMuted) {
            this.audioPort.mute();
        } else {
            this.audioPort.unmute();
            this.audioPort.setVolume(this.state.volume);
        }
        this.storagePort.saveMutedState(newMuted);
        this.updateState({ isMuted: newMuted });
    }

    toggleShuffle(): void {
        this.updateState({ shuffleEnabled: !this.state.shuffleEnabled });
    }

    toggleExpanded(): void {
        this.updateState({ isExpanded: !this.state.isExpanded });
    }

    toggleMinimized(): void {
        this.updateState({ isMinimized: !this.state.isMinimized });
    }

    getAnalyserNode(): AnalyserNode | null {
        return this.audioPort.getAnalyserNode();
    }

    destroy(): void {
        this.audioPort.destroy();
        this.listeners.clear();
    }
}
