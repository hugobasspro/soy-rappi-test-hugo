import { StrapiFile } from '../../upload/models/strapi-file';
import { TitleRich } from './title-rich.interface';

export interface AdditionalInfoBlock {
  description : string;
  image: StrapiFile;
  smallText: string;
  titleAdditionalInfo: TitleRich;
}
