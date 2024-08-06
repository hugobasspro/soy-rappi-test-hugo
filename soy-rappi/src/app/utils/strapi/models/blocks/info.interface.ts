import { StrapiFile } from '../../upload/models/strapi-file';
import { TitleRich } from './title-rich.interface';

export interface InfoBlock {
  titleInfo: TitleRich;
  image: StrapiFile;
  text:string;
}
