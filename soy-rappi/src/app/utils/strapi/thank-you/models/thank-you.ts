import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface ThankYou extends StrapiBaseModel {
  phoneRegistration: PhoneRegistrationText;
  slug: string;
  goBack: string;
}

interface PhoneRegistrationText {
  title: string;
  logo: StrapiFile;
  list: listText[];
}

export interface listText {
  btn: boolean;
  ctaLabel: string;
  ctaUrl: string;
  text: string;
}
