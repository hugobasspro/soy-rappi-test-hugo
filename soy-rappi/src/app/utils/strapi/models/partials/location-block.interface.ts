import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { LocationList } from '../blocks/location-list.interface';

export interface LocationBlock extends StrapiBaseComponent {
  locations: LocationList[];
  previewLocationText:  string;
}
