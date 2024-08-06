import { StrapiFile } from '../../upload/models/strapi-file';
import { StapsButtonBlock } from './staps-button.interface';

export interface StapsBlock {
  image:StrapiFile;
  title:string;
  description:string;
  imageToLeft:boolean;
  button:StapsButtonBlock;
}
