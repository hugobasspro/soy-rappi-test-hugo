import { StrapiFile } from '../../upload/models/strapi-file';

export interface PostsBlock {
  title : string;
  date : Date;
  image : StrapiFile;
}
