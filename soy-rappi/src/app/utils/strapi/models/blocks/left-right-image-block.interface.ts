import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { StrapiFile } from '../../upload/models/strapi-file';
import { Button } from '../partials/button.interface';
import { TitleRich } from './title-rich.interface';

export interface LeftRightImageBlock extends StrapiBaseComponent{
  titlePlain?: string;
  text?: string;
  button?: Button;
  media?: StrapiFile;
  youtubeEmbedURL?: string;
  titleLeft?: TitleRich;
  subtitle?: string;
  subtitleText?: string;
  titleRight?: TitleRich;
}
