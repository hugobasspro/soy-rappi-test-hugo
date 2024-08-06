import { StrapiFile } from '../../upload/models/strapi-file';

export interface DepositionCards {
  testimony : string;
  name :string;
  role: string;
  image: StrapiFile;
}
