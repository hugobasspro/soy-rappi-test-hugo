import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { Bag } from 'src/app/utils/strapi/bag/models/bag';
import { BagService } from 'src/app/utils/strapi/bag/services/bag.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { JsonLDService } from 'src/app/utils/json-ld/json-ls.service';
import { StructuredDataSchemaFaq } from 'src/app/utils/json-ld/schemas/faq/faq-schema.interface';
import { locale } from 'src/environments/locale/locale';
import faqSchema from 'src/app/utils/json-ld/schemas/faq/bag/faqSchema.json';
import faqSchemaBr from 'src/app/utils/json-ld/schemas/faq/bag/faqSchemaBr.json';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit, OnDestroy {

  bagData: Bag | undefined = this.ssrService.getState<Bag | undefined>('Bag', undefined);

  private _subscription: Subscription = new Subscription();
  private faqSchema: StructuredDataSchemaFaq = locale.slice(-2).toUpperCase() !== 'BR' ? faqSchema : faqSchemaBr;

  constructor(
    private bagService: BagService,
    public uploadService: UploadService,
    private seoService: SeoInformationService,
    private ssrService: ServerSideRenderingService,
    public sharedFunctionsService: SharedFunctionsService,
    private faqStructuredDataService: JsonLDService
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq');
    this._subscription.add(
      this.bagService.getBagData().subscribe(res => {
        this.bagData = (res?.data) ? res.data : undefined;
        this.ssrService.setState<Bag | undefined>('Bag', this.bagData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this.faqStructuredDataService.removeSchema('structured-data-faq');
  }

  setMetaData(): void {
    if (this.bagData) {
      this.seoService.setSEOInformation(this.bagData.seoInformation);
    }
  }

}

