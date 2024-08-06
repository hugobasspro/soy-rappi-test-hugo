import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { GrayBlocks } from '../../models/blocks/gray-blocks.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface Health extends StrapiBaseModel {
  banner: BannerBlock;
  titleTextBlock: TextBlock;
  grayBlocks: GrayBlocks[];
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
