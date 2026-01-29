import { HTML5AudioAdapter } from "../adapters/HTML5AudioAdapter";
import { LocalStorageAdapter } from "../adapters/LocalStorageAdapter";
import { SpotifyPreviewAdapter } from "../adapters/SpotifyPreviewAdapter";
import { PlayerService } from "../../application/services/PlayerService";

let playerServiceInstance: PlayerService | null = null;

export const createPlayerService = (): PlayerService => {
    if (playerServiceInstance) {
        return playerServiceInstance;
    }

    const audioAdapter = new HTML5AudioAdapter();
    const storageAdapter = new LocalStorageAdapter();
    const playlistAdapter = new SpotifyPreviewAdapter();

    playerServiceInstance = new PlayerService(
        audioAdapter,
        storageAdapter,
        playlistAdapter
    );

    return playerServiceInstance;
};

export const getPlayerService = (): PlayerService | null => {
    return playerServiceInstance;
};

export const destroyPlayerService = (): void => {
    if (playerServiceInstance) {
        playerServiceInstance.destroy();
        playerServiceInstance = null;
    }
};
