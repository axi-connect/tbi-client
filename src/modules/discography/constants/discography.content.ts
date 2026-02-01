import { Album } from "../domain/entities/album.entity";

export const DISCOGRAPHY_CONTENT: Album[] = [

  {
    id: "1",
    title: "La Vida Cambia",
    artist: "Andrés SZ",
    release_date: "2026",
    cover_image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769898805/la-vida-cambia-_andres_sz_fqyao5.jpg",
    spotify_url: "https://open.spotify.com/intl-es/track/7fiprgGpA8FJ57sgLC6S2V?si=09891cedc2e24a8b",
    tracks: []
  },
  {
    id: "2",
    title: "ESTA KABRON",
    artist: "La ENE, Cortux",
    release_date: "2026",
    cover_image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769899231/esta-kabron-_la-ene.jpg_cvzuur.jpg",
    spotify_url: "https://open.spotify.com/album/...",
    tracks: []
  },
  {
    id: "3",
    title: "Molly con Heny",
    artist: "Trillerboi",
    release_date: "2026",
    cover_image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769902848/molly-con_heny-_tbi_rpfxyj.jpg",
    spotify_url: "https://open.spotify.com/intl-es/track/5Q2Iq8pwUxJavKQL1Qj5Z5?si=6f7ca77cfbaf4d5a",
    tracks: [
      {
        id: "t3",
        title: "Good Times, Bad Times",
        duration_ms: 210000,
        preview_url: null,
        spotify_url: "https://open.spotify.com/track/..."
      }
    ]
  },
  {
    id: "4",
    title: "Bandido",
    artist: "Lugo NLM",
    release_date: "2026",
    cover_image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769899231/esta-kabron-_la-ene.jpg_cvzuur.jpg",
    spotify_url: "https://open.spotify.com/intl-es/album/2jNC3UR71PMgLi9hmtGUEP?si=_Mmqk57bRxqggAQ1r5qgaQ",
    tracks: []
  },
  {
    id: "5",
    title: "DE ROSE TABOGO",
    artist: "The Brothers Inc",
    release_date: "2026",
    cover_image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769902979/D.R.P.T-_tbi_yuaxoz.jpg",
    spotify_url: "https://open.spotify.com/intl-es/album/0X9I5akQqNhCgtX4aAo0kh?si=f7f3cf09a7e74511",
    tracks: []
  },
];

export const DISCOGRAPHY_COPY = {
  tag: "Lanzamientos",
  title: "Discografía",
  description: "Explora los lanzamientos que están definiendo la nueva era del género urbano en Bogotá. Producciones con identidad, estructura y visión global.",
};