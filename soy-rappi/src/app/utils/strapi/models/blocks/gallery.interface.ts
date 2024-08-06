import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface Gallery {
  bigImage: StrapiFile;
  smallImage1: StrapiFile;
  smallImage2: StrapiFile;
  smallImage3: StrapiFile;
  smallImage4: StrapiFile;
}



