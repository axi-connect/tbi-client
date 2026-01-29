import { IAudioPort } from "../../domain/ports/IAudioPort";

export class HTML5AudioAdapter implements IAudioPort {
    private audio: HTMLAudioElement | null = null;
    private audioContext: AudioContext | null = null;
    private analyser: AnalyserNode | null = null;
    private source: MediaElementAudioSourceNode | null = null;
    private timeUpdateCallback: ((time: number) => void) | null = null;
    private endedCallback: (() => void) | null = null;
    private errorCallback: ((error: Error) => void) | null = null;
    private loadedMetadataCallback: ((duration: number) => void) | null = null;

    constructor() {
        if (typeof window !== "undefined") {
            this.audio = new Audio();
            this.audio.crossOrigin = "anonymous";
            this.setupEventListeners();
        }
    }

    private setupEventListeners(): void {
        if (!this.audio) return;

        this.audio.addEventListener("timeupdate", () => {
            if (this.timeUpdateCallback && this.audio) {
                this.timeUpdateCallback(this.audio.currentTime);
            }
        });

        this.audio.addEventListener("ended", () => {
            if (this.endedCallback) {
                this.endedCallback();
            }
        });

        this.audio.addEventListener("error", () => {
            if (this.errorCallback && this.audio?.error) {
                this.errorCallback(new Error(this.audio.error.message));
            }
        });

        this.audio.addEventListener("loadedmetadata", () => {
            if (this.loadedMetadataCallback && this.audio) {
                this.loadedMetadataCallback(this.audio.duration);
            }
        });
    }

    private setupAudioContext(): void {
        if (this.audioContext || !this.audio) return;

        try {
            this.audioContext = new (window.AudioContext ||
                (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
            this.analyser = this.audioContext.createAnalyser();
            this.analyser.fftSize = 256;
            this.source = this.audioContext.createMediaElementSource(this.audio);
            this.source.connect(this.analyser);
            this.analyser.connect(this.audioContext.destination);
        } catch {
            console.warn("Could not create AudioContext for visualization");
        }
    }

    async play(url: string): Promise<void> {
        if (!this.audio) return;

        this.audio.src = url;
        this.setupAudioContext();

        try {
            await this.audio.play();
        } catch (error) {
            if (this.errorCallback) {
                this.errorCallback(error as Error);
            }
            throw error;
        }
    }

    pause(): void {
        this.audio?.pause();
    }

    resume(): void {
        this.audio?.play();
    }

    stop(): void {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }

    seek(time: number): void {
        if (this.audio) {
            this.audio.currentTime = time;
        }
    }

    setVolume(volume: number): void {
        if (this.audio) {
            this.audio.volume = Math.max(0, Math.min(1, volume));
        }
    }

    mute(): void {
        if (this.audio) {
            this.audio.muted = true;
        }
    }

    unmute(): void {
        if (this.audio) {
            this.audio.muted = false;
        }
    }

    getCurrentTime(): number {
        return this.audio?.currentTime ?? 0;
    }

    getDuration(): number {
        return this.audio?.duration ?? 0;
    }

    getAnalyserNode(): AnalyserNode | null {
        return this.analyser;
    }

    onTimeUpdate(callback: (time: number) => void): void {
        this.timeUpdateCallback = callback;
    }

    onEnded(callback: () => void): void {
        this.endedCallback = callback;
    }

    onError(callback: (error: Error) => void): void {
        this.errorCallback = callback;
    }

    onLoadedMetadata(callback: (duration: number) => void): void {
        this.loadedMetadataCallback = callback;
    }

    destroy(): void {
        if (this.audio) {
            this.audio.pause();
            this.audio.src = "";
        }
        if (this.audioContext) {
            this.audioContext.close();
        }
        this.audio = null;
        this.audioContext = null;
        this.analyser = null;
        this.source = null;
    }
}
