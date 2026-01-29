import { Playlist } from "../entities/Playlist";
import { Track } from "../entities/Track";

export interface IPlaylistPort {
    getPlaylist(playlistId: string): Promise<Playlist>;
    getDefaultPlaylist(): Promise<Playlist>;
    getRandomTrack(playlist: Playlist): Track;
    getNextTrack(playlist: Playlist, currentIndex: number, shuffle: boolean): { track: Track; index: number };
}
