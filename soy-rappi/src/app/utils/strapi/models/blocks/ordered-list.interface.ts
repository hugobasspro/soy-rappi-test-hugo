import { StrapiFile } from '../../upload/models/strapi-file';

export interface OrderedList{
  text: string;
  image: StrapiFile[];
}
