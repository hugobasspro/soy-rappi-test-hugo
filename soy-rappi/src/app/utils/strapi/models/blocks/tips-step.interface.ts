import { CallToActionButton } from '../../models/partials/call-to-action-button.interface';
import { CartButton } from '../../models/partials/cart-button.interface';
import { StrapiFile } from '../../upload/models/strapi-file';
import { MultimediaItems } from './multimedia-items.interface';
import { TitleRich } from './title-rich.interface';
export interface TipsStepBlock {
  description : string;
  cartButton : CartButton;
  callToActionButton : CallToActionButton;
  media: StrapiFile;
  youtubeEmbedURL:string;
  title:string;
  titleStap?: TitleRich;
  type: string;
  textSide:string;
  multimedia: MultimediaItems;
}
