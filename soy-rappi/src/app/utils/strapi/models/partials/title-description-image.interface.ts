import { StrapiFile } from '../../upload/models/strapi-file';
import { Button } from './button.interface';
export interface TitleDescriptionImage {
  title : string;
  description : string;
  image : StrapiFile;
  button: Button;
}
