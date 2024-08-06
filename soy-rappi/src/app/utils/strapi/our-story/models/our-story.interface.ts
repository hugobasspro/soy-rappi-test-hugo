import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { MultimediaBlock } from '../../models/blocks/multimedia.interface';
import { SeoInformation } from '../../seo/models/seo-information';
import { StrapiFile } from '../../upload/models/strapi-file';

export interface OurStoryPage extends StrapiBaseModel {
  banner: BannerBlock;
  mainImage: StrapiFile;
  mainImageText: string;
  mainImageHighlightedText: string;
  richContent: string;
  multimedia: MultimediaBlock;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
