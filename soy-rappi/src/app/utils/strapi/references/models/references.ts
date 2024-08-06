import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CapturesCarousel } from '../../models/blocks/captures-carousel.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { MultimediaItemBlock } from '../../models/blocks/multimedia-item.interface';
import { OrderedList } from '../../models/blocks/ordered-list.interface';
import { RichTextBlock } from '../../models/blocks/rich-text-block';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface References extends StrapiBaseModel {
  banner: BannerBlock;
  titleTextBlock: TextBlock;
  referencesList: OrderedList[];
  carousel: CapturesCarousel;
  orderedList: OrderedList[];
  multimedia: MultimediaItemBlock;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
  richTextAfterList: string;
}
