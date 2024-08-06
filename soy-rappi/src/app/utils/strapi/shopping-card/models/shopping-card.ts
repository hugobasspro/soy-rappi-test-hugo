import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { InfoBlock } from '../../models/blocks/info.interface';
import { MultimediaBlock } from '../../models/blocks/multimedia.interface';
import { TipsStepBlock } from '../../models/blocks/tips-step.interface';
import { CuriositiesCarouselItem } from '../../models/partials/curiosities-carousel-item.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface ShoppingCard extends StrapiBaseModel {
  banner: BannerBlock;
  Carousel: CuriositiesCarouselItem[];
  CarouselBgColor: string;
  shoppingCardMultimedia: MultimediaBlock;
  info: InfoBlock;
  step: TipsStepBlock;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
