import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CallToActionBlock } from '../../models/blocks/call-to-action.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { OurFoundarBlock } from '../../models/blocks/our-foundar.interface';
import { PrincipalesBlock } from '../../models/blocks/principales.interface';
import { StapsBlock } from '../../models/blocks/staps.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';
export interface WhoWeArePage extends StrapiBaseModel {
  banner: BannerBlock;
  titleTextBlock: TextBlock;
  missionBlockDescription: string;
  callToAction: CallToActionBlock;
  frequentQuestions: FrequentQuestionsBlock;
  ourFoundersBlock: OurFoundarBlock;
  steps: StapsBlock[];
  principles: PrincipalesBlock;
  slug: string;
  missionBlock: TextBlock;
  seoInformation: SeoInformation;
}
