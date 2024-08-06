import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CodeInputModule } from 'angular-code-input';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { UtilsModule } from '../utils/utils.module';
import { AboutUsStepComponent } from './about-us-step/about-us-step.component';
import { AcquireBagContentComponent } from './acquire-bag-content/acquire-bag-content.component';
import { AdditionalInfoBlockComponent } from './additional-info-block/additional-info-block.component';
import { BagLocationsComponent } from './bag-locations/bag-locations.component';
import { BenefitsBlockComponent } from './benefits-block/benefits-block.component';
import { BlogBannerComponent } from './blog-banner/blog-banner.component';
import { BlogEntryBannerComponent } from './blog-entry-banner/blog-entry-banner.component';
import { BreadcrumbTabsBlockComponent } from './breadcrumb-tabs-block/breadcrumb-tabs-block.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CallToActionBlockComponent } from './call-to-action-block/call-to-action-block.component';
import { ContentTabsComponent } from './content-tabs/content-tabs.component';
import { CuriositiesCarouselComponent } from './curiosities-carousel/curiosities-carousel.component';
import { DepositionCardComponent } from './deposition-card/deposition-card.component';
import { DepositionsBlockComponent } from './depositions-block/depositions-block.component';
import { DepositionsBlockMobileCarouselComponent } from './depostions-block-mobile-carousel/depostions-block-mobile-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { FormBannerComponent } from './form-banner/form-banner.component';
import { FoundersBlockComponent } from './founders-block/founders-block.component';
import { FoundersBoxComponent } from './founders-box/founders-box.component';
import { FrequentQuestionsBlockComponent } from './frequent-questions-block/frequent-questions-block.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { HeaderComponent } from './header/header.component';
import { ImageBlogGalleryComponent } from './image-blog-gallery/image-blog-gallery.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { LeftImageBlockComponent } from './left-image-block/left-image-block.component';
import { LeftTextBannerComponent } from './left-text-banner/left-text-banner.component';
import { LinkBankGenericStepComponent } from './link-bank-generic-step/link-bank-generic-step.component';
import { ListBlockComponent } from './list-block/list-block.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { MobileCapturesCarouselComponent } from './mobile-captures-carousel/mobile-captures-carousel.component';
import { MostRecentEntriesBlockComponent } from './most-recent-entries-block/most-recent-entries-block.component';
import { MostRecentEntryCardComponent } from './most-recent-entry-card/most-recent-entry-card.component';
import { MultimediaBlockComponent } from './multimedia-block/multimedia-block.component';
import { MultimediaItemComponent } from './multimedia-item/multimedia-item.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NoveltiesBlockComponent } from './novelties-block/novelties-block.component';
import { NoveltyCardComponent } from './novelty-card/novelty-card.component';
import { OrderedListComponent } from './ordered-list/ordered-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PhoneVerificationDialogComponent } from './phone-verification-dialog/phone-verification-dialog.component';
import { PreviewCaptureDetailsComponent } from './preview-capture-details/preview-capture-details.component';
import { PrincipleBoxComponent } from './principle-box/principle-box.component';
import { PrinciplesBlockComponent } from './principles-block/principles-block.component';
import { QuestionItemComponent } from './question-item/question-item.component';
import { QuoteComponent } from './quote/quote.component';
import { RealStoryBlockComponent } from './real-story-block/real-story-block.component';
import { RealStoryBlogEntryComponent } from './real-story-blog-entry/real-story-blog-entry.component';
import { ReceiveOrdersGenericStepComponent } from './receive-orders-generic-step/receive-orders-generic-step.component';
import { RegisterBlockComponent } from './register-block/register-block.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RewardsAdditionalInfoBlockComponent } from './rewards-additional-info-block/rewards-additional-info-block.component';
import { RewardsStepComponent } from './rewards-step/rewards-step.component';
import { RichTextComponent } from './rich-text/rich-text.component';
import { RightImageBlockComponent } from './right-image-block/right-image-block.component';
import { RightListBlockComponent } from './right-list-block/right-list-block.component';
import { RightMultimediaBlockComponent } from './right-multimedia-block/right-multimedia-block.component';
import { ScheduleReservationStepComponent } from './schedule-reservation-step/schedule-reservation-step.component';
import { SearchBlogEntriesComponent } from './search-blog-entries/search-blog-entries.component';
import { SmallInfoBlockComponent } from './small-info-block/small-info-block.component';
import { SmallInfoColoredBlockComponent } from './small-info-colored-block/small-info-colored-block.component';
import { StandardBannerComponent } from './standard-banner/standard-banner.component';
import { SuccessPhoneVerificationDialogComponent } from './success-phone-verification-dialog/success-phone-verification-dialog.component';
import { TabContentDesktopComponent } from './tab-content-desktop/tab-content-desktop.component';
import { TitleTextBlockComponent } from './title-text-block/title-text-block.component';
import { TopContentMobileCarouselComponent } from './top-content-mobile-carousel/top-content-mobile-carousel.component';
import { TopIconBoxComponent } from './top-icon-box/top-icon-box.component';
import { UnorderedListComponent } from './unordered-list/unordered-list.component';
import { VehicleTypeBlockComponent } from './vehicle-type-block/vehicle-type-block.component';
import { VehicleTypeBoxComponent } from './vehicle-type-box/vehicle-type-box.component';
import { VehicleTypeBlockMobileCarouselComponent } from './vehicle-type-block-mobile-carousel/vehicle-type-block-mobile-carousel.component';
import { WelcomeMobileBlockComponent } from './welcome-mobile-block/welcome-mobile-block.component';
import { WelcomeMobileDialogComponent } from './welcome-mobile-dialog/welcome-mobile-dialog.component';
import { PhoneRegistrationDialogComponent } from './phone-registration-dialog/phone-registration-dialog.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { BenefitsBlockMobileCarouselComponent } from './benefits-block-mobile-carousel/benefits-block-mobile-carousel.component';
import { DropdownListComponent } from './dropdown-list-block/dropdown-list-block.component';
import { DropdownListElementComponent } from './dropdown-list-element/dropdown-list-element.component';
import { BenefitsBannerComponent } from './benefits-banner/benefits-banner.component';
import { BenefitsDeliverymanComponent } from './benefits-deliveryman/benefits-deliveryman.component';
import { BenefitsInsuranceAlsoComponent } from './benefits-insurance-also/benefits-insurance-also.component';
import { BenefitsInsuranceBannerComponent } from './benefits-insurance-banner/benefits-insurance-banner.component';
import { BenefitsInsuranceCoveragesComponent } from './benefits-insurance-coverages/benefits-insurance-coverages.component';
import { BenefitsInsuranceFaqComponent } from './benefits-insurance-faq/benefits-insurance-faq.component';
import { BenefitsInsuranceHowCommunicateComponent } from './benefits-insurance-how-communicate/benefits-insurance-how-communicate.component';
import { BenefitsInsuranceIntroComponent } from './benefits-insurance-intro/benefits-insurance-intro.component';
import { BenefitsInsuranceWhatToDoComponent } from './benefits-insurance-what-to-do/benefits-insurance-what-to-do.component';
import { BenefitsInsuranceInformFamilyComponent } from './benefits-insurance-inform-family/benefits-insurance-inform-family.component';
import { BenefitsLearnBannerComponent } from './benefits-learn-banner/benefits-learn-banner.component';
import { BenefitsLearnVideosComponent } from './benefits-learn-videos/benefits-learn-videos.component';
import { BenefitsNewsBannerComponent } from './benefits-news-banner/benefits-news-banner.component';
import { BenefitsNewsRememberComponent } from './benefits-news-remember/benefits-news-remember.component';
import { BenefitsNewsRulesComponent } from './benefits-news-rules/benefits-news-rules.component';
import { BenefitsNewsShoppingCentersComponent } from './benefits-news-shopping-centers/benefits-news-shopping-centers.component';
import { BenefitsNewsWhereComponent } from './benefits-news-where/benefits-news-where.component';
import { BenefitsPartnersComponent } from './benefits-partners/benefits-partners.component';
import { BenefitsWeeklyComponent } from './benefits-weekly/benefits-weekly.component';
import { BenefitsAlwaysComponent } from './benefits-always/benefits-always.component';
import { BenefitUseComponent } from './benefit-use/benefit-use.component';
import { FaqsBannerComponent } from './faqs-banner/faqs-banner.component';
import { FaqsBlockComponent } from './faqs-block/faqs-block.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormDynamicComponent } from './form-dynamic/form-dynamic.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ContestComponent } from './contest/contest.component';
import { ContestDescriptionComponent } from './contest-description/contest-description.component';
import { ContestTermsConditionsComponent } from './contest-terms-conditions/contest-terms-conditions.component';
import { MatSelectModule } from '@angular/material/select';
import { FaqsBlockNew } from './faqs-block-new/faqs-block-new.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeroLandingComponent } from './hero-landing/hero-landing.component';
import { InsureBannerComponent } from './insure-banner/insure-banner.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RegisterFormComponent,
    FormBannerComponent,
    BlogEntryBannerComponent,
    ImageGalleryComponent,
    QuoteComponent,
    SearchBlogEntriesComponent,
    BlogBannerComponent,
    RealStoryBlogEntryComponent,
    RealStoryBlockComponent,
    LeftImageBlockComponent,
    StandardBannerComponent,
    PhoneVerificationDialogComponent,
    SuccessPhoneVerificationDialogComponent,
    BreadcrumbComponent,
    WelcomeMobileDialogComponent,
    ContentTabsComponent,
    MostRecentEntryCardComponent,
    MostRecentEntriesBlockComponent,
    NoveltyCardComponent,
    NoveltiesBlockComponent,
    NewsCardComponent,
    PaginatorComponent,
    LinkBankGenericStepComponent,
    QuestionItemComponent,
    FrequentQuestionsBlockComponent,
    MultimediaBlockComponent,
    MobileCapturesCarouselComponent,
    RightImageBlockComponent,
    TopIconBoxComponent,
    BenefitsBlockComponent,
    TopContentMobileCarouselComponent,
    VehicleTypeBlockComponent,
    VehicleTypeBoxComponent,
    TabContentDesktopComponent,
    DepositionCardComponent,
    DepositionsBlockComponent,
    MultimediaItemComponent,
    RegisterBlockComponent,
    RightMultimediaBlockComponent,
    ListItemComponent,
    ListBlockComponent,
    ReceiveOrdersGenericStepComponent,
    CuriositiesCarouselComponent,
    SmallInfoBlockComponent,
    SmallInfoColoredBlockComponent,
    RightListBlockComponent,
    LocationsListComponent,
    GoogleMapsComponent,
    BagLocationsComponent,
    CallToActionBlockComponent,
    AdditionalInfoBlockComponent,
    LeftTextBannerComponent,
    NewsBlockComponent,
    AcquireBagContentComponent,
    PreviewCaptureDetailsComponent,
    TitleTextBlockComponent,
    OrderedListComponent,
    ScheduleReservationStepComponent,
    UnorderedListComponent,
    RewardsAdditionalInfoBlockComponent,
    RewardsStepComponent,
    PrincipleBoxComponent,
    PrinciplesBlockComponent,
    AboutUsStepComponent,
    FoundersBlockComponent,
    FoundersBoxComponent,
    RichTextComponent,
    WelcomeMobileBlockComponent,
    ImageBlogGalleryComponent,
    BreadcrumbTabsBlockComponent,
    PhoneRegistrationDialogComponent,
    PhoneListComponent,
    BenefitsBlockMobileCarouselComponent,
    VehicleTypeBlockMobileCarouselComponent,
    DepositionsBlockMobileCarouselComponent,
    DropdownListComponent,
    DropdownListElementComponent,
    BenefitsDeliverymanComponent,
    BenefitsWeeklyComponent,
    BenefitsPartnersComponent,
    BenefitsBannerComponent,
    BenefitsInsuranceBannerComponent,
    BenefitsInsuranceIntroComponent,
    BenefitsInsuranceWhatToDoComponent,
    BenefitsInsuranceCoveragesComponent,
    BenefitsInsuranceAlsoComponent,
    BenefitsInsuranceHowCommunicateComponent,
    BenefitsInsuranceFaqComponent,
    BenefitsInsuranceInformFamilyComponent,
    BenefitsNewsBannerComponent,
    BenefitsNewsRememberComponent,
    BenefitsNewsWhereComponent,
    BenefitsNewsShoppingCentersComponent,
    BenefitsNewsRulesComponent,
    BenefitsLearnBannerComponent,
    BenefitsLearnVideosComponent,
    BenefitsAlwaysComponent,
    BenefitUseComponent,
    FaqsBannerComponent,
    FaqsBlockComponent,
    FormDynamicComponent,
    ContestComponent,
    ContestDescriptionComponent,
    ContestTermsConditionsComponent,
    FaqsBlockNew,
    HeroLandingComponent,
    InsureBannerComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    FormBannerComponent,
    BlogEntryBannerComponent,
    ImageGalleryComponent,
    QuoteComponent,
    SearchBlogEntriesComponent,
    BlogBannerComponent,
    RealStoryBlogEntryComponent,
    RealStoryBlockComponent,
    LeftImageBlockComponent,
    StandardBannerComponent,
    PhoneVerificationDialogComponent,
    SuccessPhoneVerificationDialogComponent,
    BreadcrumbComponent,
    WelcomeMobileDialogComponent,
    ContentTabsComponent,
    MostRecentEntryCardComponent,
    MostRecentEntriesBlockComponent,
    NoveltyCardComponent,
    NoveltiesBlockComponent,
    NewsCardComponent,
    PaginatorComponent,
    LinkBankGenericStepComponent,
    QuestionItemComponent,
    FrequentQuestionsBlockComponent,
    MultimediaBlockComponent,
    MobileCapturesCarouselComponent,
    RightImageBlockComponent,
    TopIconBoxComponent,
    BenefitsBlockComponent,
    TopContentMobileCarouselComponent,
    VehicleTypeBlockComponent,
    VehicleTypeBoxComponent,
    TabContentDesktopComponent,
    DepositionCardComponent,
    DepositionsBlockComponent,
    MultimediaItemComponent,
    RegisterBlockComponent,
    RightMultimediaBlockComponent,
    ListItemComponent,
    ListBlockComponent,
    ReceiveOrdersGenericStepComponent,
    CuriositiesCarouselComponent,
    SmallInfoBlockComponent,
    SmallInfoColoredBlockComponent,
    RightListBlockComponent,
    LocationsListComponent,
    GoogleMapsComponent,
    BagLocationsComponent,
    CallToActionBlockComponent,
    AdditionalInfoBlockComponent,
    LeftTextBannerComponent,
    NewsBlockComponent,
    AcquireBagContentComponent,
    TitleTextBlockComponent,
    PreviewCaptureDetailsComponent,
    BsDropdownModule,
    OrderedListComponent,
    ScheduleReservationStepComponent,
    UnorderedListComponent,
    RewardsAdditionalInfoBlockComponent,
    RewardsStepComponent,
    PrincipleBoxComponent,
    PrinciplesBlockComponent,
    FoundersBlockComponent,
    FoundersBoxComponent,
    RichTextComponent,
    WelcomeMobileBlockComponent,
    BreadcrumbTabsBlockComponent,
    AboutUsStepComponent,
    PhoneRegistrationDialogComponent,
    BenefitsBlockMobileCarouselComponent,
    VehicleTypeBlockMobileCarouselComponent,
    DepositionsBlockMobileCarouselComponent,
    DropdownListComponent,
    DropdownListElementComponent,
    BenefitsDeliverymanComponent,
    BenefitsWeeklyComponent,
    BenefitsPartnersComponent,
    BenefitsBannerComponent,
    BenefitsInsuranceBannerComponent,
    BenefitsInsuranceIntroComponent,
    BenefitsInsuranceWhatToDoComponent,
    BenefitsInsuranceCoveragesComponent,
    BenefitsInsuranceAlsoComponent,
    BenefitsInsuranceHowCommunicateComponent,
    BenefitsInsuranceFaqComponent,
    BenefitsInsuranceInformFamilyComponent,
    BenefitsNewsBannerComponent,
    BenefitsNewsRememberComponent,
    BenefitsNewsWhereComponent,
    BenefitsNewsShoppingCentersComponent,
    BenefitsNewsRulesComponent,
    BenefitsLearnBannerComponent,
    BenefitsLearnVideosComponent,
    BenefitsAlwaysComponent,
    BenefitUseComponent,
    FormDynamicComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    UtilsModule,
    RouterModule,
    BsDropdownModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    CollapseModule.forRoot(),
    CodeInputModule.forRoot({
      codeLength: 7,
      isCharsCode: true,
      code: '',
    }),
    MatInputModule,
    MatAutocompleteModule,
    CdkAccordionModule,
    MatSelectModule,
  ],
})
export class PartialsModule {}
