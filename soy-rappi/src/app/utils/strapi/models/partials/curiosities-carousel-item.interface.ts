import { StrapiFile } from '../../upload/models/strapi-file';
import { Button } from '../../models/partials/button.interface';
import { TextModel } from './text.interface';
import { TitleRich } from '../blocks/title-rich.interface';
export interface CuriositiesCarouselItem {
  image : StrapiFile;
  description:string;
  textList: TextModel[];
  button: Button;
  titleCarousel: TitleRich;
  text: string;
}
