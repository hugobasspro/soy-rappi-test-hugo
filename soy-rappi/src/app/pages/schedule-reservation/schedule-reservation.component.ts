import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { ScheduleReservation } from 'src/app/utils/strapi/schedule-reservation/models/schedule-reservation.interface';
import {
  ScheduleReservationService,
} from 'src/app/utils/strapi/schedule-reservation/services/schedule-reservation.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { JsonLDService } from 'src/app/utils/json-ld/json-ls.service';
import { StructuredDataSchemaFaq } from 'src/app/utils/json-ld/schemas/faq/faq-schema.interface';
import { locale } from 'src/environments/locale/locale';
import faqSchema from 'src/app/utils/json-ld/schemas/faq/schedule-reservation/faqSchema.json';
import faqSchemaBr from 'src/app/utils/json-ld/schemas/faq/schedule-reservation/faqSchemaBr.json';

@Component({
  selector: 'app-schedule-reservation',
  templateUrl: './schedule-reservation.component.html',
  styleUrls: ['./schedule-reservation.component.scss'],
})
export class ScheduleReservationComponent implements OnInit, OnDestroy {

  scheduleReservationData: ScheduleReservation | undefined = this.ssrService
    .getState<ScheduleReservation | undefined>('schedule-reservation', undefined);

  private _subscription: Subscription = new Subscription();
  private faqSchema: StructuredDataSchemaFaq = locale.slice(-2).toUpperCase() !== 'BR' ? faqSchema : faqSchemaBr;

  constructor(
    private scheduleReservationService: ScheduleReservationService,
    private ssrService: ServerSideRenderingService,
    public uploadService: UploadService,
    private seoService: SeoInformationService,
    public sharedFunctionsService: SharedFunctionsService,
    private faqStructuredDataService: JsonLDService
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq');
    this._subscription.add(
      this.scheduleReservationService.getScheduleReservationData().subscribe(res => {
        this.scheduleReservationData = (res.data) ? res.data : undefined;
        this.ssrService.setState<ScheduleReservation | undefined>('schedule-reservation', this.scheduleReservationData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this.faqStructuredDataService.removeSchema('structured-data-faq');
  }

  setMetaData(): void {
    if (this.scheduleReservationData) {
      this.seoService.setSEOInformation(this.scheduleReservationData.seoInformation);
    }
  }
}
