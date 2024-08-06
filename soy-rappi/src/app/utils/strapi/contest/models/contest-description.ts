import { StrapiFile } from '../../upload/models/strapi-file';

export interface ContestDescription {
  description: string
  image: StrapiFile;
  position: boolean;
}
