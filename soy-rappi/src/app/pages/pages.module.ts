import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PartialsModule } from '../partials/partials.module';
import { UtilsModule } from '../utils/utils.module';
import { AcceptingOrdersComponent } from './accepting-orders/accepting-orders.component';
import { BagComponent } from './bag/bag.component';
import { BankAccountAndCalendarComponent } from './bank-account-and-calendar/bank-account-and-calendar.component';
import { BlogComponent } from './blog/blog.component';
import { DisciplinaryMeasuresComponent } from './disciplinary-measures/disciplinary-measures.component';
import { EarnWithRappiComponent } from './earn-with-rappi/earn-with-rappi.component';
import { EntryComponent } from './entry/entry.component';
import { ExclusiveDiscountsComponent } from './exclusive-discounts/exclusive-discounts.component';
import { FiveStarsOrdersComponent } from './five-stars-orders/five-stars-orders.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { InformativeVideosComponent } from './informative-videos/informative-videos.component';
import { MonotaxComponent } from './monotax/monotax.component';
import { OrderTypesComponent } from './order-types/order-types.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RappiMetricsComponent } from './rappi-metrics/rappi-metrics.component';
import { RappiToolsComponent } from './rappi-tools/rappi-tools.component';
import { ReferencesComponent } from './references/references.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ScheduleReservationComponent } from './schedule-reservation/schedule-reservation.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { StatusComponent } from './status/status.component';
import { TipsComponent } from './tips/tips.component';
import { WhatYouHaveToKnowComponent } from './what-you-have-to-know/what-you-have-to-know.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { RedirectCountryModalComponent } from './home/redirect-country-modal/redirect-country-modal.component';
import { BenefitsInsuranceComponent } from './benefits-insurance/benefits-insurance.component';
import { BenefitsLearnComponent } from './benefits-learn/benefits-learn.component';
import { BenefitsNewsComponent } from './benefits-news/benefits-news.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BenefitsAlwaysComponent } from '../partials/benefits-always/benefits-always.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    BlogComponent,
    EntryComponent,
    WhatYouHaveToKnowComponent,
    ScheduleReservationComponent,
    OrderTypesComponent,
    AcceptingOrdersComponent,
    BagComponent,
    ShoppingCardComponent,
    EarnWithRappiComponent,
    RappiToolsComponent,
    BankAccountAndCalendarComponent,
    MonotaxComponent,
    TipsComponent,
    RewardsComponent,
    ReferencesComponent,
    StatusComponent,
    RappiMetricsComponent,
    FiveStarsOrdersComponent,
    InformativeVideosComponent,
    DisciplinaryMeasuresComponent,
    ExclusiveDiscountsComponent,
    HealthComponent,
    WhoWeAreComponent,
    OurStoryComponent,
    ThankYouComponent,
    RedirectCountryModalComponent,
    BenefitsComponent,
    BenefitsNewsComponent,
    BenefitsLearnComponent,
    BenefitsInsuranceComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PartialsModule,
    UtilsModule,
    ModalModule,
  ],
  providers: [
    BsModalService,
  ],
})
export class PagesModule { }
