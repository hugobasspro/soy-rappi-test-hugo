import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { RichTextBlock } from '../../models/blocks/rich-text-block';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { TitleDescriptionImage } from '../../models/partials/title-description-image.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface Status extends StrapiBaseModel {
  banner: BannerBlock;
  titleTextBlock: TextBlock;
  iconBoxes: TitleDescriptionImage[];
  richLists: RichTextBlock[];
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
