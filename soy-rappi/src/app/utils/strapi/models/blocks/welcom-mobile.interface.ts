import { StrapiFile } from '../../upload/models/strapi-file';
import { Button } from '../partials/button.interface';
import { TitleRich } from './title-rich.interface';

export interface WelcomeMobileBlock {
  image: StrapiFile;
  titleWelcome: TitleRich;
  welcomeButton :Button;
}
