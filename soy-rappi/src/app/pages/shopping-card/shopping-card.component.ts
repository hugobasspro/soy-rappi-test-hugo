import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { ShoppingCard } from 'src/app/utils/strapi/shopping-card/models/shopping-card';
import { ShoppingCardService } from 'src/app/utils/strapi/shopping-card/services/shopping-card.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { JsonLDService } from 'src/app/utils/json-ld/json-ls.service';
import { StructuredDataSchemaFaq } from 'src/app/utils/json-ld/schemas/faq/faq-schema.interface';
import { locale } from 'src/environments/locale/locale';
import faqSchema from 'src/app/utils/json-ld/schemas/faq/shopping-card/faqSchema.json';
import faqSchemaBr from 'src/app/utils/json-ld/schemas/faq/shopping-card/faqSchemaBr.json';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],
})
export class ShoppingCardComponent implements OnInit, OnDestroy {

  shoppingCardData: ShoppingCard | undefined = this.ssrService
    .getState<ShoppingCard | undefined>('ShoppingCard', undefined);

  private subscription: Subscription = new Subscription();
  private faqSchema: StructuredDataSchemaFaq = locale.slice(-2).toUpperCase() !== 'BR' ? faqSchema : faqSchemaBr;

  constructor(
    private shoppingCardService: ShoppingCardService,
    public uploadService: UploadService,
    private ssrService: ServerSideRenderingService,
    private seoService: SeoInformationService,
    private faqStructuredDataService: JsonLDService
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq');
    this.subscription.add(
      this.shoppingCardService.getShoppingCardPageData().subscribe(res => {
        this.shoppingCardData = (res.data) ? res.data : undefined;
        this.ssrService.setState<ShoppingCard | undefined>('ShoppingCard', this.shoppingCardData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.faqStructuredDataService.removeSchema('structured-data-faq');
  }

  setMetaData(): void {
    if (this.shoppingCardData) {
      this.seoService.setSEOInformation(this.shoppingCardData.seoInformation);
    }
  }
}
