export interface Track {
  id: string;
  title: string;
  duration_ms: number;
  preview_url: string | null;
  spotify_url: string;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  release_date: string;
  cover_image: string;
  spotify_url: string;
  tracks: Track[];
}

