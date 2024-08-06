import { StrapiFile } from '../../upload/models/strapi-file';

export interface NovidadesCategoriesBlog {
  date: Date;
  image: StrapiFile;
  title: string;
  titleCategory: string;
}
