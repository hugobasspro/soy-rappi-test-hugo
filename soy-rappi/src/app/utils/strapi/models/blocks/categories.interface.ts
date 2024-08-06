import { StrapiFile } from '../../upload/models/strapi-file';

export interface Categories {
  date: Date;
  description: string;
  image: StrapiFile[];
  title: string;
  titleCategory: string;
}
