import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface BannerDynamic extends StrapiBaseComponent {
  title: string;
  subTitle: string;
  date : Date;
  banner: StrapiFile;
  bannerMobile: StrapiFile;
}
