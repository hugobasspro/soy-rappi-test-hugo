import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface OpenGraph {
  title: string;
  type: string;
  image: StrapiFile;
  description: string;
  siteName: string;
}

export enum OpenGraphFields {
  TITLE = 'og:title',
  TYPE = 'og:type',
  IMAGE = 'og:image',
  IMAGE_ALT = 'og:image:alt',
  IMAGE_WIDTH = 'og:image:width',
  IMAGE_HEIGHT = 'og:image:height',
  IMAGE_TYPE = 'og:image:type',
  URL = 'og:url',
  DESCRIPTION = 'og:description',
  SITE_NAME = 'og:site_name',
}
