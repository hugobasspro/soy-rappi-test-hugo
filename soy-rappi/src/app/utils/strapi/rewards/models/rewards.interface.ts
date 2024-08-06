import { BannerBlock } from '../../models/blocks/banner.interface';
import { CallToActionBlock } from '../../models/blocks/call-to-action.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { ImageTitleBlock } from '../../models/blocks/image-title.interface';
import { MultimediaBlock } from '../../models/blocks/multimedia.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface RewardsPage {
  banner: BannerBlock;
  titleTextBlock: TextBlock;
  rewardsSteps: ImageTitleBlock[];
  frequentQuestions: FrequentQuestionsBlock;
  additionalInfo: CallToActionBlock;
  slug: string;
  seoInformation: SeoInformation;
  multimedia: MultimediaBlock;
}
