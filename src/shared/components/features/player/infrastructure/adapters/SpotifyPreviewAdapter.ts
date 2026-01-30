import { IPlaylistPort } from "../../domain/ports/IPlaylistPort";
import { Playlist } from "../../domain/entities/Playlist";
import { Track } from "../../domain/entities/Track";

/**
 * Adapter que consume la API interna de Next.js para obtener la playlist de Spotify.
 * Obtiene tracks reales con previews de 30 segundos.
 */
export class SpotifyPreviewAdapter implements IPlaylistPort {
    // Playlist de respaldo por si falla la API
    private readonly fallbackPlaylist: Playlist = {
        id: "tbi-fallback-mix",
        name: "TBI Fallback Mix",
        coverImage: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768195111/bosa-tbi_pjdew7.png",
        tracks: [
            {
                id: "1",
                duration: 30,
                artist: "Andrés SZ",
                title: "Hasta Normal",
                albumArt: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769659891/art-single-hasta-normal-sz_ptyian.jpg",
                previewUrl: "https://res.cloudinary.com/dvtz1qx7g/video/upload/v1769660032/Hasta_normal_-_Andr%C3%A9s_SZ_Visualizer_tiyq7h.mp3",
            },
        ]
    };

    async getPlaylist(playlistId: string): Promise<Playlist> {
        return this.getDefaultPlaylist();
    }

    async getDefaultPlaylist(): Promise<Playlist> {
        try {
            const res = await fetch('/api/spotify/playlist');

            if (!res.ok) {
                console.warn('Failed to fetch playlist from API, using fallback');
                return this.fallbackPlaylist;
            }

            const data = await res.json();

            // Mapear respuesta de Spotify a nuestras entidades
            const tracks: Track[] = data.tracks.items
                .map((item: any) => {
                    const track = item.track;
                    // Filtramos tracks que no tengan preview
                    if (!track?.preview_url) return null;

                    return {
                        id: track.id,
                        title: track.name,
                        artist: track.artists.map((a: any) => a.name).join(', '),
                        albumArt: track.album.images[0]?.url,
                        duration: 30, // Los previews de Spotify son siempre de 30s
                        previewUrl: track.preview_url,
                        spotifyUri: track.uri,
                    };
                })
                .filter(Boolean) as Track[];

            if (tracks.length === 0) {
                console.warn('No tracks with previews found in playlist');
                return this.fallbackPlaylist;
            }

            return {
                id: data.id,
                name: data.name,
                coverImage: data.images[0]?.url,
                tracks,
            };
        } catch (error) {
            console.error('Error fetching playlist:', error);
            return this.fallbackPlaylist;
        }
    }

    getRandomTrack(playlist: Playlist): Track {
        const tracks = playlist.tracks;
        if (tracks.length === 0) return this.fallbackPlaylist.tracks[0];
        const randomIndex = Math.floor(Math.random() * tracks.length);
        return tracks[randomIndex];
    }

    getNextTrack(
        playlist: Playlist,
        currentIndex: number,
        shuffle: boolean
    ): { track: Track; index: number } {
        const tracks = playlist.tracks;
        if (tracks.length === 0) return { track: this.fallbackPlaylist.tracks[0], index: 0 };

        if (shuffle) {
            let randomIndex: number;
            // Evitar repetir la misma canción si hay más de una
            do {
                randomIndex = Math.floor(Math.random() * tracks.length);
            } while (randomIndex === currentIndex && tracks.length > 1);

            return {
                track: tracks[randomIndex],
                index: randomIndex,
            };
        } else {
            const nextIndex = (currentIndex + 1) % tracks.length;
            return {
                track: tracks[nextIndex],
                index: nextIndex,
            };
        }
    }
}
