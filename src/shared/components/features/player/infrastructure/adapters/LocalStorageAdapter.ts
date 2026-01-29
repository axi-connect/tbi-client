import { IStoragePort } from "../../domain/ports/IStoragePort";

const STORAGE_KEYS = {
    VOLUME: "tbi_player_volume",
    LAST_TRACK: "tbi_player_last_track",
    MUTED: "tbi_player_muted",
} as const;

export class LocalStorageAdapter implements IStoragePort {
    private isAvailable: boolean;

    constructor() {
        this.isAvailable = this.checkAvailability();
    }

    private checkAvailability(): boolean {
        if (typeof window === "undefined") return false;
        try {
            const test = "__storage_test__";
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch {
            return false;
        }
    }

    saveVolume(volume: number): void {
        if (!this.isAvailable) return;
        localStorage.setItem(STORAGE_KEYS.VOLUME, String(volume));
    }

    getVolume(): number {
        if (!this.isAvailable) return 0.7;
        const stored = localStorage.getItem(STORAGE_KEYS.VOLUME);
        return stored ? parseFloat(stored) : 0.7;
    }

    saveLastTrackId(trackId: string): void {
        if (!this.isAvailable) return;
        localStorage.setItem(STORAGE_KEYS.LAST_TRACK, trackId);
    }

    getLastTrackId(): string | null {
        if (!this.isAvailable) return null;
        return localStorage.getItem(STORAGE_KEYS.LAST_TRACK);
    }

    saveMutedState(isMuted: boolean): void {
        if (!this.isAvailable) return;
        localStorage.setItem(STORAGE_KEYS.MUTED, String(isMuted));
    }

    getMutedState(): boolean {
        if (!this.isAvailable) return false;
        return localStorage.getItem(STORAGE_KEYS.MUTED) === "true";
    }
}
