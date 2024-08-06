import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface TestModel extends StrapiBaseModel {
  field1: string;
  field2: string;
  avatar: StrapiFile;
  photos: StrapiFile[];
}
