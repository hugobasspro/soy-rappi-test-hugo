import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';


/* models */
import { StrapiBaseComponent } from 'src/app/utils/strapi/base/models/strapi-base-component';
import { BannerDynamic } from 'src/app/utils/strapi/models/blocks/banner-dynamic.interface';
import { TextBlock } from 'src/app/utils/strapi/models/blocks/text-block.interface';
import { BlogGallery } from 'src/app/utils/strapi/models/blocks/blog-gallery.interface';
import { UnderedList } from 'src/app/utils/strapi/models/blocks/undered-list.interface';
import { Quote } from 'src/app/utils/strapi/models/blocks/quote.interface';
import { MultimediaItemBlock } from 'src/app/utils/strapi/models/blocks/multimedia-item.interface';
import { FrequentQuestionsBlock } from 'src/app/utils/strapi/models/blocks/frequent-questions.interface';
import { CaptureDynamic } from 'src/app/utils/strapi/models/blocks/capture-dynamic.interface';
import { LocationBlock } from 'src/app/utils/strapi/models/partials/location-block.interface';
import { DropdownListBlock } from 'src/app/utils/strapi/models/blocks/dropdown-list-block.interface';
/* components  */
import { BlogEntryBannerComponent } from '../../../blog-entry-banner/blog-entry-banner.component';
import { TitleTextBlockComponent } from '../../../title-text-block/title-text-block.component';
import { ImageBlogGalleryComponent } from '../../../image-blog-gallery/image-blog-gallery.component';
import { OrderedListComponent } from '../../../ordered-list/ordered-list.component';
import { QuoteComponent } from '../../../quote/quote.component';
import { LeftImageBlockComponent } from '../../../left-image-block/left-image-block.component';
import { LeftRightImageBlock } from 'src/app/utils/strapi/models/blocks/left-right-image-block.interface';
import { RightImageBlockComponent } from '../../../right-image-block/right-image-block.component';
import { MultimediaBlockComponent } from '../../../multimedia-block/multimedia-block.component';
import { MobileCapturesCarouselComponent } from '../../../mobile-captures-carousel/mobile-captures-carousel.component';
import { FrequentQuestionsBlockComponent } from '../../../frequent-questions-block/frequent-questions-block.component';
import { BagLocationsComponent } from '../../../bag-locations/bag-locations.component';
import { DropdownListComponent } from 'src/app/partials/dropdown-list-block/dropdown-list-block.component';
import { BenefitsBanner } from 'src/app/utils/strapi/models/blocks/benefits-banner.interface';
import { BenefitsBannerComponent } from 'src/app/partials/benefits-banner/benefits-banner.component';
import { BenefitsDeliverymanComponent } from 'src/app/partials/benefits-deliveryman/benefits-deliveryman.component';
import { BenefitsDeliveryman } from 'src/app/utils/strapi/models/blocks/benefits-deliveryman.interface';
import { BenefitsWeeklyComponent } from 'src/app/partials/benefits-weekly/benefits-weekly.component';
import { BenefitsWeekly } from 'src/app/utils/strapi/models/blocks/benefits-weekly.interface';
import { BenefitsPartnersComponent } from 'src/app/partials/benefits-partners/benefits-partners.component';
import { BenefitsPartners } from 'src/app/utils/strapi/models/blocks/benefits-partners.interface';
import { BenefitsAlwaysComponent } from 'src/app/partials/benefits-always/benefits-always.component';
import { BenefitsAlways } from 'src/app/utils/strapi/models/blocks/benefits-always.interface';
import { BenefitsNewsRemember } from 'src/app/utils/strapi/models/blocks/benefits-news-remember.interface';
import { BenefitsNewsRememberComponent } from 'src/app/partials/benefits-news-remember/benefits-news-remember.component';
import { BenefitsNewsWhere } from 'src/app/utils/strapi/models/blocks/benefits-news-where.interface';
import { BenefitsNewsWhereComponent } from 'src/app/partials/benefits-news-where/benefits-news-where.component';
import { BenefitsNewsShoppingCenters } from 'src/app/utils/strapi/models/blocks/benefits-news-shopping-centers.interface';
import { BenefitsNewsShoppingCentersComponent } from 'src/app/partials/benefits-news-shopping-centers/benefits-news-shopping-centers.component';
import { BenefitsNewsRulesComponent } from 'src/app/partials/benefits-news-rules/benefits-news-rules.component';
import { BenefitsNewsRules } from 'src/app/utils/strapi/models/blocks/benefits-news-rules.interface';
import { BenefitsInsuranceIntro } from 'src/app/utils/strapi/models/blocks/benefits-insurance-intro.interface';
import { BenefitsInsuranceIntroComponent } from 'src/app/partials/benefits-insurance-intro/benefits-insurance-intro.component';
import { BenefitsInsuranceWhatToDoComponent } from 'src/app/partials/benefits-insurance-what-to-do/benefits-insurance-what-to-do.component';
import { BenefitsInsuranceWhatToDo } from 'src/app/utils/strapi/models/blocks/benefits-insurance-what-to-do.interface';
import { BenefitsInsuranceCoveragesComponent } from 'src/app/partials/benefits-insurance-coverages/benefits-insurance-coverages.component';
import { BenefitsInsuranceCoverages } from 'src/app/utils/strapi/models/blocks/benefits-insurance-coverages.interface';
import { BenefitsInsuranceAlsoComponent } from 'src/app/partials/benefits-insurance-also/benefits-insurance-also.component';
import { BenefitsInsuranceAlso } from 'src/app/utils/strapi/models/blocks/benefits-insurance-also.interface';
import { BenefitsInsuranceHowCommunicateComponent } from 'src/app/partials/benefits-insurance-how-communicate/benefits-insurance-how-communicate.component';
import { BenefitsInsuranceHowCommunicate } from 'src/app/utils/strapi/models/blocks/benefits-insurance-how-communicate.interface';
import { BenefitsInsuranceFaqComponent } from 'src/app/partials/benefits-insurance-faq/benefits-insurance-faq.component';
import { BenefitsInsuranceFaq } from 'src/app/utils/strapi/models/blocks/benefits-insurance-faq.interface';
import { BenefitsLearnVideosComponent } from 'src/app/partials/benefits-learn-videos/benefits-learn-videos.component';
import { BenefitsLearnVideos } from 'src/app/utils/strapi/models/blocks/benefits-learn-videos.interface';
import { BenefitUseComponent } from 'src/app/partials/benefit-use/benefit-use.component';
import { BenefitUse } from 'src/app/utils/strapi/models/blocks/benefit-use.interface';
import { BenefitsInsuranceInformFamilyComponent } from 'src/app/partials/benefits-insurance-inform-family/benefits-insurance-inform-family.component';
import { BenefitsInsuranceInformFamily } from 'src/app/utils/strapi/models/blocks/benefit-insurance-inform-family.interface';
import { FaqsBannerComponent } from 'src/app/partials/faqs-banner/faqs-banner.component';
import { FaqsBanner } from 'src/app/utils/strapi/models/blocks/faqs-banner.interface';
import { FaqsBlockComponent } from 'src/app/partials/faqs-block/faqs-block.component';
import { FaqsBlock, FaqsNewBlock } from 'src/app/utils/strapi/models/blocks/faqs-block.interface';
import { FormDynamicComponent } from 'src/app/partials/form-dynamic/form-dynamic.component';
import { FormDynamic } from 'src/app/utils/strapi/form-dynamic/models/form-dynamic';
import { ContestComponent } from 'src/app/partials/contest/contest.component';
import { Contest } from 'src/app/utils/strapi/contest/models/contest';
import { FaqsBlockNew } from 'src/app/partials/faqs-block-new/faqs-block-new.component';
import { HeroLandingComponent } from 'src/app/partials/hero-landing/hero-landing.component';
import { HeroInterface } from 'src/app/utils/strapi/models/blocks/hero-interface';
import { InsureBanner } from 'src/app/utils/strapi/models/blocks/insure-banner.interface';
import { InsureBannerComponent } from 'src/app/partials/insure-banner/insure-banner.component';
@Injectable({
  providedIn: 'root',
})
export class DynamicPageService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  createComponent(viewContainerRef: ViewContainerRef, data: StrapiBaseComponent) {
    switch (data.__component) {
      case 'block.banner-dynamic': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BlogEntryBannerComponent);
        const component = viewContainerRef.createComponent<BlogEntryBannerComponent>(factory);
        component.instance.data = data as BannerDynamic;
        break;
      }

      case 'block.title-text-block': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(TitleTextBlockComponent);
        const component = viewContainerRef.createComponent<TitleTextBlockComponent>(factory);
        component.instance.data = data as TextBlock;
        break;
      }

      case 'block.blog-gallery': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(ImageBlogGalleryComponent);
        const component = viewContainerRef.createComponent<ImageBlogGalleryComponent>(factory);
        component.instance.data = data as BlogGallery;
        break;
      }

      case 'block.unordered-list': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(OrderedListComponent);
        const component = viewContainerRef.createComponent<OrderedListComponent>(factory);
        component.instance.dataBlog = data as UnderedList;
        break;
      }

      case 'block.quote': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(QuoteComponent);
        const component = viewContainerRef.createComponent<QuoteComponent>(factory);
        component.instance.data = data as Quote;
        break;
      }

      case 'block.left-image': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(LeftImageBlockComponent);
        const component = viewContainerRef.createComponent<LeftImageBlockComponent>(factory);
        component.instance.data = data as LeftRightImageBlock;
        break;
      }

      case 'block.right-image': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(RightImageBlockComponent);
        const component = viewContainerRef.createComponent<RightImageBlockComponent>(factory);
        component.instance.data = data as LeftRightImageBlock;
        break;
      }

      case 'block.multimedia': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(MultimediaBlockComponent);;
        const component = viewContainerRef.createComponent<MultimediaBlockComponent>(factory);
        component.instance.data = data as MultimediaItemBlock;
        break;
      }

      case 'block.carousel': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(MobileCapturesCarouselComponent);
        const component = viewContainerRef.createComponent<MobileCapturesCarouselComponent>(factory);
        component.instance.data = data as CaptureDynamic;
        break;
      }

      case 'block.frequent-questions': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(FrequentQuestionsBlockComponent);
        const component = viewContainerRef.createComponent<FrequentQuestionsBlockComponent>(factory);
        component.instance.data = data as FrequentQuestionsBlock;
        break;
      }

      case 'block.dropdown-list': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(DropdownListComponent);
        const component = viewContainerRef.createComponent<DropdownListComponent>(factory);
        component.instance.data = data as DropdownListBlock;
        break;
      }

      case 'block.benefits-banner': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsBannerComponent);
        const component = viewContainerRef.createComponent<BenefitsBannerComponent>(factory);
        component.instance.data = data as BenefitsBanner;
        break;
      }

      case 'block.benefits-deliveryman': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsDeliverymanComponent);
        const component = viewContainerRef.createComponent<BenefitsDeliverymanComponent>(factory);
        component.instance.data = data as BenefitsDeliveryman;
        break;
      }

      case 'block.benefits-weekly': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsWeeklyComponent);
        const component = viewContainerRef.createComponent<BenefitsWeeklyComponent>(factory);
        component.instance.data = data as BenefitsWeekly;
        break;
      }

      case 'block.benefits-partners': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsPartnersComponent);
        const component = viewContainerRef.createComponent<BenefitsPartnersComponent>(factory);
        component.instance.data = data as BenefitsPartners;
        break;
      }

      case 'block.benefits-always': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsAlwaysComponent);
        const component = viewContainerRef.createComponent<BenefitsAlwaysComponent>(factory);
        component.instance.data = data as BenefitsAlways;
        break;
      }

      case 'block.benefits-news-remember': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsNewsRememberComponent);
        const component = viewContainerRef.createComponent<BenefitsNewsRememberComponent>(factory);
        component.instance.data = data as BenefitsNewsRemember;
        break;
      }

      case 'block.benefits-news-where': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsNewsWhereComponent);
        const component = viewContainerRef.createComponent<BenefitsNewsWhereComponent>(factory);
        component.instance.data = data as BenefitsNewsWhere;
        break;
      }

      case 'block.benefits-news-shopping-centers': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsNewsShoppingCentersComponent);
        const component = viewContainerRef.createComponent<BenefitsNewsShoppingCentersComponent>(factory);
        component.instance.data = data as BenefitsNewsShoppingCenters;
        break;
      }

      case 'block.benefits-news-rules': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsNewsRulesComponent);
        const component = viewContainerRef.createComponent<BenefitsNewsRulesComponent>(factory);
        component.instance.data = data as BenefitsNewsRules;
        break;
      }

      case 'block.benefits-insurance-intro': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceIntroComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceIntroComponent>(factory);
        component.instance.data = data as BenefitsInsuranceIntro;
        break;
      }

      case 'block.benefits-insurance-what-to-do': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceWhatToDoComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceWhatToDoComponent>(factory);
        component.instance.data = data as BenefitsInsuranceWhatToDo;
        break;
      }

      case 'block.benefits-insurance-coverages': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceCoveragesComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceCoveragesComponent>(factory);
        component.instance.data = data as BenefitsInsuranceCoverages;
        break;
      }

      case 'block.benefits-insurance-also': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceAlsoComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceAlsoComponent>(factory);
        component.instance.data = data as BenefitsInsuranceAlso;
        break;
      }

      case 'block.benefits-insurance-how-communicate': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceHowCommunicateComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceHowCommunicateComponent>(factory);
        component.instance.data = data as BenefitsInsuranceHowCommunicate;
        break;
      }

      case 'block.benefits-insurance-faq': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceFaqComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceFaqComponent>(factory);
        component.instance.data = data as BenefitsInsuranceFaq;
        break;
      }

      case 'block.benefits-learn-videos': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsLearnVideosComponent);
        const component = viewContainerRef.createComponent<BenefitsLearnVideosComponent>(factory);
        component.instance.data = data as BenefitsLearnVideos;
        break;
      }

      case 'block.benefit-use': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitUseComponent);
        const component = viewContainerRef.createComponent<BenefitUseComponent>(factory);
        component.instance.data = data as BenefitUse;
        break;
      }

      case 'block.benefits-insurance-inform-family': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BenefitsInsuranceInformFamilyComponent);
        const component = viewContainerRef.createComponent<BenefitsInsuranceInformFamilyComponent>(factory);
        component.instance.data = data as BenefitsInsuranceInformFamily;
        break;
      }

      case 'partial.localizations-block': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(BagLocationsComponent);
        const component = viewContainerRef.createComponent<BagLocationsComponent>(factory);
        component.instance.data = data as LocationBlock; 
        break;
      }

      case 'block.fa-qs-banner': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(FaqsBannerComponent);
        const component = viewContainerRef.createComponent<FaqsBannerComponent>(factory);
        component.instance.data = data as FaqsBanner; 
        break;
      }

      case 'block.fa-qs-block': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(FaqsBlockComponent);
        const component = viewContainerRef.createComponent<FaqsBlockComponent>(factory);
        component.instance.data = data as FaqsBlock;
        break;
      }
      
      case 'block.form': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(FormDynamicComponent);
        const component = viewContainerRef.createComponent<FormDynamicComponent>(factory);
        component.instance.data = data as FormDynamic;
        break;
      }

      case 'block.contest': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(ContestComponent);
        const component = viewContainerRef.createComponent<ContestComponent>(factory);
        component.instance.data = data as Contest;
        break;
      }
      case 'block.fa-qs-block-new': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(FaqsBlockNew);
        const component = viewContainerRef.createComponent<FaqsBlockNew>(factory);
        component.instance.data = data as FaqsNewBlock;
        break;
      }

      case 'block.hero-lading': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(HeroLandingComponent)
        const component = viewContainerRef.createComponent<HeroLandingComponent>(factory);
        component.instance.data = data as HeroInterface;
        break;
      }

      case 'block.insure-banner': {
        const factory = this.componentFactoryResolver.resolveComponentFactory(InsureBannerComponent);
        const component = viewContainerRef.createComponent<InsureBannerComponent>(factory);
        component.instance.data = data as InsureBanner;
        break;
      }

      default:
        break;
    }
  }
}
