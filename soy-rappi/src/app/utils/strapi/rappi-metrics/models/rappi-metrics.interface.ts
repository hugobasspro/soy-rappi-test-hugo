import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { TipsStepBlock } from '../../models/blocks/tips-step.interface';
import { CuriositiesCarouselItem } from '../../models/partials/curiosities-carousel-item.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface RappiMetricsPage  extends StrapiBaseModel {
  banner: BannerBlock;
  Carousel: CuriositiesCarouselItem[];
  CarouselBgColor : string;
  titleTextBlock: TextBlock;
  toolsStep: TipsStepBlock[];
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
