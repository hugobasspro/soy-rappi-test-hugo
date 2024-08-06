import { StrapiFile } from '../../upload/models/strapi-file';
import { RichText } from './rich-text.interface';

export interface ReservationStep {
  title: string;
  text: string;
  image: StrapiFile;
  isImageLeft: boolean;
  richTextList: RichText[];
}
