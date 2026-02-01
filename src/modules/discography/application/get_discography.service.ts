import { IDiscographyRepository } from "../domain/ports/discography_repository.port";
import { Album } from "../domain/entities/album.entity";

export class GetDiscographyService {
  constructor(private readonly discographyRepository: IDiscographyRepository) {}

  async execute(): Promise<Album[]> {
    return this.discographyRepository.getAlbums();
  }
}

