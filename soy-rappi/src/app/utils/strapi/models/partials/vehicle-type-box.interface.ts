import { StrapiFile } from '../../upload/models/strapi-file';
import { Texts } from './texts.interface';
export interface VehicleTypeBox {
  image : StrapiFile;
  title : string;
  textItems : Texts[];
}
