import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { TabContentsBlock } from '../../models/blocks/tab-contents.interface';
import { TitleRich } from '../../models/blocks/title-rich.interface';
import { TitleDescriptionImage } from '../../models/partials/title-description-image.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface DisciplinaryMeasuresPage extends StrapiBaseModel {
  banner: BannerBlock;
  contentTabs: TitleDescriptionImage[];
  titleTabs: TitleRich;
  frequentQuestions: FrequentQuestionsBlock;
  tabContent: TabContentsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
