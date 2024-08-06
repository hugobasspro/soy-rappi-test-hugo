import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  BankAccountAndCalendar,
} from 'src/app/utils/strapi/bank-account-and-calendar/models/bank-account-and-calendar';
import {
  BankAccountAndCalendarService,
} from 'src/app/utils/strapi/bank-account-and-calendar/services/bank-account-and-calendar.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { TitleDescriptionImage } from '../../utils/strapi/models/partials/title-description-image.interface';

@Component({
  selector: 'app-bank-account-and-calendar',
  templateUrl: './bank-account-and-calendar.component.html',
  styleUrls: ['./bank-account-and-calendar.component.scss'],
})
export class BankAccountAndCalendarComponent implements OnInit, OnDestroy {

  bankAccountData: BankAccountAndCalendar | undefined = this.ssrService.getState<BankAccountAndCalendar | undefined>(
    'BankAccountAndCalendar', undefined);

  carouselIndex: number = 0;

  private _subscription: Subscription = new Subscription();

  constructor(
    private bankAccountAndCalendarService: BankAccountAndCalendarService,
    public uploadService: UploadService,
    private ssrService: ServerSideRenderingService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.bankAccountAndCalendarService.getBankAccountData().subscribe(res => {
        this.bankAccountData = (res.data) ? res.data : undefined;
        this.ssrService.setState<BankAccountAndCalendar | undefined>('BankAccountAndCalendar',this.bankAccountData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.bankAccountData) {
      this.seoService.setSEOInformation(this.bankAccountData.seoInformation);
    }
  }

  getRichTextByIndex(index: number): string {
    if (this.bankAccountData?.richLists?.length &&
      this.bankAccountData.richLists.length > index &&
      this.bankAccountData.richLists[index].richContent) {
      return this.bankAccountData.richLists[index].richContent;
    } else {
      return '';
    }
  }

  getCarrouselCaptureByIndex(index: number): TitleDescriptionImage[] {
    if (this.bankAccountData?.carousel?.length &&
      this.bankAccountData.carousel.length > index &&
      this.bankAccountData.carousel[index].captures) {
      return this.bankAccountData.carousel[index].captures;
    } else {
      return [];
    }
  }

  getCarouselCaptureByIndex(index: number): TitleDescriptionImage[] {

    if (index < 0) {
      return [];
    }

    if (this.bankAccountData?.carousel?.length &&
      this.bankAccountData.carousel.length > index &&
      this.bankAccountData.carousel[index].captures) {
      return this.bankAccountData.carousel[index].captures;
    } else {
      return [];
    }
  }

  getCarouselBackgroundByIndex(index: number): string {

    if (index < 0) {
      return '';
    }

    if (this.bankAccountData?.carousel?.length &&
      this.bankAccountData.carousel.length > index &&
      this.bankAccountData.carousel[index].bgColor) {
      return this.bankAccountData.carousel[index].bgColor;
    } else {
      return '';
    }
  }
}
