import { IPlaylistPort } from "../../domain/ports/IPlaylistPort";
import { Playlist } from "../../domain/entities/Playlist";
import { Track } from "../../domain/entities/Track";

/**
 * Adapter que usa previews de Spotify hardcodeados.
 * Estos son URLs públicos de 30 segundos que no requieren autenticación.
 * 
 * Las canciones han sido seleccionadas para ofrecer variedad y buena calidad de preview.
 */
export class SpotifyPreviewAdapter implements IPlaylistPort {
    private readonly defaultPlaylist: Playlist = {
        id: "tbi-curated-mix",
        name: "TBI Curated Mix",
        coverImage: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768195111/bosa-tbi_pjdew7.png",
        tracks: [
            {
                id: "1",
                title: "Ambient Loop",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3",
            },
            {
                id: "2",
                title: "Electronic Vibes",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
            },
            {
                id: "3",
                title: "Urban Beat",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jahzzar/Traveler%27s_Guide/Jahzzar_-_05_-_Siesta.mp3",
            },
            {
                id: "4",
                title: "Night Drive",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kai_Engel/Satin/Kai_Engel_-_04_-_Interlude.mp3",
            },
            {
                id: "5",
                title: "Chill Session",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Broke_For_Free/Slam_Funk/Broke_For_Free_-_01_-_Night_Owl.mp3",
            },
            {
                id: "6",
                title: "Studio Flow",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Podington_Bear/Playful/Podington_Bear_-_Rubber_Band.mp3",
            },
            {
                id: "7",
                title: "Midnight Groove",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kevin_MacLeod/Impact/Kevin_MacLeod_-_Cipher.mp3",
            },
            {
                id: "8",
                title: "Golden Hour",
                artist: "TBI Studio",
                albumArt: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
                duration: 30,
                previewUrl: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Scott_Holmes/Media_Mixes/Scott_Holmes_-_Upbeat_Party.mp3",
            },
        ],
    };

    async getPlaylist(playlistId: string): Promise<Playlist> {
        // Por ahora solo tenemos una playlist
        if (playlistId === this.defaultPlaylist.id) {
            return this.defaultPlaylist;
        }
        return this.defaultPlaylist;
    }

    async getDefaultPlaylist(): Promise<Playlist> {
        return this.defaultPlaylist;
    }

    getRandomTrack(playlist: Playlist): Track {
        const randomIndex = Math.floor(Math.random() * playlist.tracks.length);
        return playlist.tracks[randomIndex];
    }

    getNextTrack(
        playlist: Playlist,
        currentIndex: number,
        shuffle: boolean
    ): { track: Track; index: number } {
        if (shuffle) {
            // Reproducción aleatoria: elegir un índice diferente al actual
            let randomIndex: number;
            do {
                randomIndex = Math.floor(Math.random() * playlist.tracks.length);
            } while (randomIndex === currentIndex && playlist.tracks.length > 1);

            return {
                track: playlist.tracks[randomIndex],
                index: randomIndex,
            };
        } else {
            // Reproducción secuencial
            const nextIndex = (currentIndex + 1) % playlist.tracks.length;
            return {
                track: playlist.tracks[nextIndex],
                index: nextIndex,
            };
        }
    }
}
