import { Album } from "../entities/album.entity";

export interface IDiscographyRepository {
  getAlbums(): Promise<Album[]>;
  getAlbumById(id: string): Promise<Album | null>;
}

