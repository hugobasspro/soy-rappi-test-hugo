import { StrapiBaseModel } from '../../base/models/strapi-base-model';

export interface User extends StrapiBaseModel {
  username: string;
  email: string;
  provider?: string;
  confirmed: boolean;
  blocked: boolean;
  role: object;
}
