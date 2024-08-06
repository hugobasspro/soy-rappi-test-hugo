import { BannerBlock } from '../../models/blocks/banner.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { InfoBlock } from '../../models/blocks/info.interface';
import { LocationsBlock } from '../../models/blocks/locations.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { TitleRich } from '../../models/blocks/title-rich.interface';
import { Texts } from '../../models/partials/texts.interface';
import { TitleDescriptionImage } from '../../models/partials/title-description-image.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface Bag {
  banner: BannerBlock;
  benefitBoxes: TitleDescriptionImage[];
  info: InfoBlock;
  titleList: TitleRich;
  listDescription: string;
  listItems: Texts[];
  listDescriptionItems: Texts[];
  titleLocations: TitleRich;
  locationsDescription: string;
  locationsSubtitle: string;
  locationsSubtitleDescription: string;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
  titleTextBlock: TextBlock;
  locationsBlock: LocationsBlock;
  firstButtonTitle: string;
  secondButtonTitle: string;
  thirdButtonTitle: string;
  firstButtonUrl: string;
  secondButtonUrl: string;
  thirdButtonUrl: string;
  useLocation: boolean;
}
