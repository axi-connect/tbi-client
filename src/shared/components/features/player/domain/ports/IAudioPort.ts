export interface IAudioPort {
    play(url: string): Promise<void>;
    pause(): void;
    resume(): void;
    stop(): void;
    seek(time: number): void;
    setVolume(volume: number): void;
    mute(): void;
    unmute(): void;
    getCurrentTime(): number;
    getDuration(): number;
    getAnalyserNode(): AnalyserNode | null;
    onTimeUpdate(callback: (time: number) => void): void;
    onEnded(callback: () => void): void;
    onError(callback: (error: Error) => void): void;
    onLoadedMetadata(callback: (duration: number) => void): void;
    destroy(): void;
}
