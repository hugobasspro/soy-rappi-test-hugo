import { StrapiBaseModel } from '../../base/models/strapi-base-model';

interface StrapiFileImageFormat {
  ext: string;
  hash: string;
  height: number;
  width: number;
  mine: string;
  name: string;
  size: number;
  url: string;
}

export interface StrapiFile extends StrapiBaseModel {
  alternativeText: string;
  caption: string;
  ext: string;
  hash: string;
  mime: string;
  name: string;
  size: string;
  url: string;
  width?: number;
  height?: number;
  formats?: {
    large: StrapiFileImageFormat;
    medium: StrapiFileImageFormat;
    small: StrapiFileImageFormat;
    thumbnail: StrapiFileImageFormat;
  };
}
