import { StrapiFile } from '../../upload/models/strapi-file';

export interface BannerBlock {
  title : string;
  background: StrapiFile;
  backgroundMobile: StrapiFile;
}
