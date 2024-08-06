import { StrapiFile } from '../../upload/models/strapi-file';

export interface MultimediaItems {
  title: string;
  image: StrapiFile;
  type: string;
  contentURL: string;
}
