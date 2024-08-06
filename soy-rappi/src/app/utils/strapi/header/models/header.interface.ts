import { MenuItem } from '../../models/blocks/menu-item';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface HeaderPage {
  downloadApplicationButtonText: string;
  downloadApplicationUrl: string;
  registerButtonText: string;
  registerButtonUrl: string;
  items: MenuItem[];
  logo: StrapiFile;
}
