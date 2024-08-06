import { StrapiFile } from '../../upload/models/strapi-file';

export interface FaqsBanner {
  title: string;
  imageDesktop: StrapiFile;
  imageMobile: StrapiFile;
}
