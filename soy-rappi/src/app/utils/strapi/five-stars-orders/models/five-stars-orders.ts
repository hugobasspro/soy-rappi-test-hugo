import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { TabContentsBlock } from '../../models/blocks/tab-contents.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { TitleDescriptionImage } from '../../models/partials/title-description-image.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface FiveStarsOrders extends StrapiBaseModel {
  banner: BannerBlock;
  titleTextBlock: TextBlock;
  tabContent: TabContentsBlock;
  howToSteps: TitleDescriptionImage[];
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
