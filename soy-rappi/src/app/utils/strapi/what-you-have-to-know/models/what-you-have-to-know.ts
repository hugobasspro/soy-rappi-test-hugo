import { BannerBlock } from '../../models/blocks/banner.interface';
import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { StrapiFile } from '../../upload/models/strapi-file';
import { RightImageBlock } from '../../models/blocks/right-image.interface';
import { RegisterFormPlaceholder } from '../../models/partials/register-form-placeholder.interface';
import { SeoInformation } from '../../seo/models/seo-information';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';

export interface WhatYouHaveToKnow extends StrapiBaseModel {
  banner : BannerBlock;
  rightMedia : RightImageBlock;
  secondBannerImage: StrapiFile;
  form : RegisterFormPlaceholder;
  slug: string;
  seoInformation: SeoInformation;
  frequentQuestions: FrequentQuestionsBlock;
}
