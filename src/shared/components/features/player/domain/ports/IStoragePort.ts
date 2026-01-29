export interface IStoragePort {
    saveVolume(volume: number): void;
    getVolume(): number;
    saveLastTrackId(trackId: string): void;
    getLastTrackId(): string | null;
    saveMutedState(isMuted: boolean): void;
    getMutedState(): boolean;
}
