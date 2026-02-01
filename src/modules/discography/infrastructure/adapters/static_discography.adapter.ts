import { Album } from "../../domain/entities/album.entity";
import { IDiscographyRepository } from "../../domain/ports/discography_repository.port";
import { DISCOGRAPHY_CONTENT } from "../../constants/discography.content";

export class StaticDiscographyAdapter implements IDiscographyRepository {
  async getAlbums(): Promise<Album[]> {
    return DISCOGRAPHY_CONTENT;
  }

  async getAlbumById(id: string): Promise<Album | null> {
    return DISCOGRAPHY_CONTENT.find(album => album.id === id) || null;
  }
}

