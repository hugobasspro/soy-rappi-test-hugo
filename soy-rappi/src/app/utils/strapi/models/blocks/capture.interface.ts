import { StrapiFile } from '../../upload/models/strapi-file';

export interface Capture {
  image: StrapiFile;
  description: string;
}
