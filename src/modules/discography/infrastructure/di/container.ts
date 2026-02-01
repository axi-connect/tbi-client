import { StaticDiscographyAdapter } from "../adapters/static_discography.adapter";
import { GetDiscographyService } from "../../application/get_discography.service";

let getDiscographyServiceInstance: GetDiscographyService | null = null;

export const getDiscographyService = (): GetDiscographyService => {
  if (getDiscographyServiceInstance) {
    return getDiscographyServiceInstance;
  }

  const repository = new StaticDiscographyAdapter();
  getDiscographyServiceInstance = new GetDiscographyService(repository);

  return getDiscographyServiceInstance;
};

