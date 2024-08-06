import { StrapiFile } from '../../upload/models/strapi-file';
import { Button } from '../partials/button.interface';
import { TitleRich } from './title-rich.interface';

export interface CallToActionBlock {
  titleCallToAction: TitleRich;
  description: string;
  image: StrapiFile;
  buttonText : string;
  button: Button;
  bgColor: string;
}
