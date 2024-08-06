import { Button } from '../../models/partials/button.interface';
import { StrapiFile } from '../../upload/models/strapi-file';
import { TitleRich } from './title-rich.interface';

export interface RightImageBlock {
  titleRight: TitleRich;
  text:string;
  Button:Button;
  media:StrapiFile;
  youtubeEmbedURL:string;
  Ttle: TitleRich;
}
