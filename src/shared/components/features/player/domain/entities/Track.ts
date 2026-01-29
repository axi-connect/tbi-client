export interface Track {
    id: string;
    title: string;
    artist: string;
    albumArt: string;
    duration: number; // en segundos
    previewUrl: string | null;
    spotifyUri?: string;
}
