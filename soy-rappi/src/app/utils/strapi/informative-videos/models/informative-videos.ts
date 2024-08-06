import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { InformativeVideoSections } from '../../models/blocks/informative-video-sections';
import { SeoInformation } from '../../seo/models/seo-information';

export interface InformativeVideos extends StrapiBaseModel {
  banner: BannerBlock;
  multimedia: InformativeVideoSections[];
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
