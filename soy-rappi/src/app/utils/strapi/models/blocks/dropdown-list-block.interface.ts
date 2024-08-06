import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { DropdownItem } from '../partials/dropdown-item.interface';

export interface DropdownListBlock extends StrapiBaseComponent{
  title: string;
  listItems: DropdownItem[];
}
