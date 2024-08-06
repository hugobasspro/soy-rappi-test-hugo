import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { Status } from 'src/app/utils/strapi/status/models/status';
import { StatusService } from 'src/app/utils/strapi/status/services/status.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { JsonLDService } from 'src/app/utils/json-ld/json-ls.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { StructuredDataSchemaFaq } from 'src/app/utils/json-ld/schemas/faq/faq-schema.interface';
import { locale } from 'src/environments/locale/locale';
import faqSchema from 'src/app/utils/json-ld/schemas/faq/status/faqSchema.json';
import faqSchemaBr from 'src/app/utils/json-ld/schemas/faq/status/faqSchemaBr.json';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit, OnDestroy {

  status: Status | undefined = this.ssrService.getState<Status | undefined>('Status', undefined);

  private subscription: Subscription = new Subscription();
  private faqSchema: StructuredDataSchemaFaq = locale.slice(-2).toUpperCase() !== 'BR' ? faqSchema : faqSchemaBr;

  constructor(
    private ssrService: ServerSideRenderingService,
    private statusService: StatusService,
    private seoService: SeoInformationService,
    public uploadService: UploadService,
    private faqStructuredDataService: JsonLDService
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq');
    this.subscription.add(
      this.statusService.getStatusPageData().subscribe((res) => {
        this.status = (res.data) ? res.data : undefined;
        this.ssrService.setState<Status | undefined>('Tips', this.status);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.faqStructuredDataService.removeSchema('structured-data-faq');
  }

  setMetaData(): void {
    if (this.status) {
      this.seoService.setSEOInformation(this.status.seoInformation);
    }
  }
}
