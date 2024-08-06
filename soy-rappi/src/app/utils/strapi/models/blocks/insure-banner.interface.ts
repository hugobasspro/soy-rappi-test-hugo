import { StrapiFile } from '../../upload/models/strapi-file';

export interface InsureBanner {
  title: string;
  imageDesktop: StrapiFile;
  imageMobile: StrapiFile;
}
