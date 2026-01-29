import { Track } from "./Track";
import { Playlist } from "./Playlist";

export interface PlayerState {
    currentTrack: Track | null;
    playlist: Playlist | null;
    isPlaying: boolean;
    isPaused: boolean;
    isLoading: boolean;
    volume: number; // 0-1
    progress: number; // 0-1
    currentTime: number; // en segundos
    duration: number; // en segundos
    isMuted: boolean;
    isExpanded: boolean;
    isMinimized: boolean;
    shuffleEnabled: boolean;
    currentTrackIndex: number;
}

export const initialPlayerState: PlayerState = {
    currentTrack: null,
    playlist: null,
    isPlaying: false,
    isPaused: true,
    isLoading: false,
    volume: 0.7,
    progress: 0,
    currentTime: 0,
    duration: 0,
    isMuted: false,
    isExpanded: false,
    isMinimized: false,
    shuffleEnabled: true,
    currentTrackIndex: 0,
};
