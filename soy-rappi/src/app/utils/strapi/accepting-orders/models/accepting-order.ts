import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { AdditionalInfoBlock } from '../../models/blocks/additional-info.interface';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CallToActionBlock } from '../../models/blocks/call-to-action.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { TipsStepBlock } from '../../models/blocks/tips-step.interface';
import { CuriositiesCarouselItem } from '../../models/partials/curiosities-carousel-item.interface';
import { TextModel } from '../../models/partials/text.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface AcceptingOrder extends StrapiBaseModel {
  banner: BannerBlock;
  receiveOrdersDescription: string;
  tipsList: TextModel[];
  tipsStep: TipsStepBlock[];
  Carousel: CuriositiesCarouselItem[];
  CarouselBgColor: string;
  callToAction: CallToActionBlock;
  additionalInfo: AdditionalInfoBlock;
  slug: string;
  seoInformation: SeoInformation;
  titleTextBlock: TextBlock;
  frequentQuestions: FrequentQuestionsBlock;
}
