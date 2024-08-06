import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface BlogGallery extends StrapiBaseComponent{
  bigImage: StrapiFile;
  smallImages: SmallImages[];
}

export interface SmallImages {
  smallImage: StrapiFile[];
}
