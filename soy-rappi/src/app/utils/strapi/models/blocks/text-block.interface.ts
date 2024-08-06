import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { TitleRich } from './title-rich.interface';
import { Button } from 'src/app/utils/strapi/models/partials/button.interface';

export interface TextBlock extends StrapiBaseComponent {
  description: string;
  titleBlock: TitleRich;
  button: Button;
  background: string;
}
