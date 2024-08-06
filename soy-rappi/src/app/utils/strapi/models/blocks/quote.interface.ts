import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { TitleRich } from './title-rich.interface';

export interface Quote extends StrapiBaseComponent {
  titleQuote: TitleRich;
}
