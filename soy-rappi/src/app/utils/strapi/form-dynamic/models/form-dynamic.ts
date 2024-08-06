import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface FormDynamic extends StrapiBaseComponent {
  description: string;
  logo: StrapiFile;
  title: string;
  fields: Fileds[];
  image: StrapiFile;
}

export interface Fileds extends StrapiBaseComponent {
  input: string;
  label: string;
  type: string;
}

export interface DataFields {
  [key: string]: string;
}