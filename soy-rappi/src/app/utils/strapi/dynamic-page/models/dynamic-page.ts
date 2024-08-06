import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { SeoInformation } from '../../seo/models/seo-information';

export interface DynamicPage extends StrapiBaseModel {
  content: StrapiBaseComponent[];
  seoInformation: SeoInformation;
  slug: string;
}
