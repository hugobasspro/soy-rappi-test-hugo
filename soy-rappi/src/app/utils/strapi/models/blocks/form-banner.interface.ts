import { StrapiFile } from '../../upload/models/strapi-file';


export interface FormBanner {
  title: string;
  callToAction: string;
  bannerImage: StrapiFile[];
  titleForm: string;
  bannerImageMobile: StrapiFile;
}
