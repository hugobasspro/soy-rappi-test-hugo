import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CarouselBlock } from '../../models/blocks/carousel.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { MultimediaBlock } from '../../models/blocks/multimedia.interface';
import { RichListMediaBlock } from '../../models/blocks/rich-list-media.interface';
import { RichListsBlock } from '../../models/blocks/rich-lists.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface BankAccountAndCalendar extends StrapiBaseModel {
  banner: BannerBlock;
  richLists: RichListsBlock[];
  richListMedia: RichListMediaBlock;
  carousel: CarouselBlock[];
  titleTextBlock: TextBlock;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
  multimedia: MultimediaBlock;
}
