import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CallToActionBlock } from '../../models/blocks/call-to-action.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { MultimediaItemBlock } from '../../models/blocks/multimedia-item.interface';
import { OrderedList } from '../../models/blocks/ordered-list.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { TipsStepBlock } from '../../models/blocks/tips-step.interface';
import { CuriositiesCarouselItem } from '../../models/partials/curiosities-carousel-item.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface RappiTools extends StrapiBaseModel {
  banner: BannerBlock;
  rappiToolsBlock: CallToActionBlock;
  multimedia: MultimediaItemBlock;
  titleTextBlock: TextBlock;
  orderedList: OrderedList[];
  toolsStep: TipsStepBlock[];
  CarouselBgColor: string;
  carousel: CuriositiesCarouselItem[];
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
