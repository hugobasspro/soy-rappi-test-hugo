import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CapturesCarousel } from '../../models/blocks/captures-carousel.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { Gallery } from '../../models/blocks/gallery.interface';
import { LeftRightImageBlock } from '../../models/blocks/left-right-image-block.interface';
import { TextBlock } from '../../models/blocks/text-block.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface EarnWithRappi extends StrapiBaseModel {
  banner: BannerBlock;
  howWorksTitleText: TextBlock;
  leftImage: LeftRightImageBlock;
  calendar: LeftRightImageBlock;
  carousel: CapturesCarousel;
  gallery: Gallery;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
