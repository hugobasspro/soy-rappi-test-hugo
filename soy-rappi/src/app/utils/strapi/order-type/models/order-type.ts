import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CallToActionBlock } from '../../models/blocks/call-to-action.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { MultimediaItemBlock } from '../../models/blocks/multimedia-item.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface OrderType extends StrapiBaseModel {
  banner: BannerBlock;
  orderTypesBlock: CallToActionBlock;
  multimedia: MultimediaItemBlock;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
