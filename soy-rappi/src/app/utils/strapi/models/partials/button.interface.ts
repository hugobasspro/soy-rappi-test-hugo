import { StrapiFile } from '../../upload/models/strapi-file';

export interface Button {
  label : string;
  url:string;
  flag?: StrapiFile
}
