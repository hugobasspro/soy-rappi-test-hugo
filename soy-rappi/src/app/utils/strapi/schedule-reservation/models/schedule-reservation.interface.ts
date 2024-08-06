import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { CallToActionBlock } from '../../models/blocks/call-to-action.interface';
import { CapturesCarousel } from '../../models/blocks/captures-carousel.interface';
import { FrequentQuestionsBlock } from '../../models/blocks/frequent-questions.interface';
import { MultimediaBlock } from '../../models/blocks/multimedia.interface';
import { ReservationStep } from '../../models/blocks/reservation-step.interface';
import { Button } from '../../models/partials/button.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface ScheduleReservation extends StrapiBaseModel {
  banner: BannerBlock;
  titleSchedule: string;
  richText: string;
  richTextButton: Button;
  callToAction: CallToActionBlock;
  reservationSteps: ReservationStep[];
  carousel: CapturesCarousel;
  multimedia: MultimediaBlock;
  frequentQuestions: FrequentQuestionsBlock;
  slug: string;
  seoInformation: SeoInformation;
}
