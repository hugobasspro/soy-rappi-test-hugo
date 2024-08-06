import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { MultimediaItems } from '../../models/blocks/multimedia-items.interface';

export interface MultimediaItemBlock extends StrapiBaseComponent {
  title : string;
  multimediaFiles: MultimediaItems[];
  background?: string;
}
