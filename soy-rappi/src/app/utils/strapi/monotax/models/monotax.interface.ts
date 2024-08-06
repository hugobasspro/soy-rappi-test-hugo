import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { Gallery } from '../../models/blocks/gallery.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface MonotaxPage extends StrapiBaseModel {
  banner: BannerBlock;
  monotaxTitleDescription: TextBlock;
  gallery: Gallery;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
