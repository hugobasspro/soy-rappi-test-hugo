import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface TwitterCard {
  title: string;
  description: string;
  image: StrapiFile;
  card: string;
  site: string;
  creator: string;
}

export enum TwitterCardFields  {
  TITLE = 'twitter:title',
  DESCRIPTION = 'twitter:description',
  IMAGE = 'twitter:image',
  IMAGE_ALT = 'twitter:image:alt',
  SITE = 'twitter:site',
  CREATOR = 'twitter:creator',
  CARD = 'twitter:card',
}
