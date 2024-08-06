import { StrapiFile } from '../../upload/models/strapi-file';
export interface NewsCards {
  title : string;
  description:string;
  date:Date;
  image:StrapiFile;
}
