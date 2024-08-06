import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { OrderedList } from './ordered-list.interface';

export interface UnderedList extends StrapiBaseComponent{
  listItem: OrderedList[];
}
