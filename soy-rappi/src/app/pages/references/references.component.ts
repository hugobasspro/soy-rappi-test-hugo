import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { References } from 'src/app/utils/strapi/references/models/references';
import { ReferencesService } from 'src/app/utils/strapi/references/services/references.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { JsonLDService } from 'src/app/utils/json-ld/json-ls.service';
import { StructuredDataSchemaFaq } from 'src/app/utils/json-ld/schemas/faq/faq-schema.interface';
import { locale } from 'src/environments/locale/locale';
import faqSchema from 'src/app/utils/json-ld/schemas/faq/references/faqSchema.json';
import faqSchemaBr from 'src/app/utils/json-ld/schemas/faq/references/faqSchemaBr.json';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnInit, OnDestroy {

  references: References | undefined = this.ssrService.getState<References | undefined>('References', undefined);

  private subscription: Subscription = new Subscription();
  private faqSchema: StructuredDataSchemaFaq = locale.slice(-2).toUpperCase() !== 'BR' ? faqSchema : faqSchemaBr;

  constructor(
    private ssrService: ServerSideRenderingService,
    public uploadService: UploadService,
    private referencesService:ReferencesService,
    private seoService: SeoInformationService,
    private faqStructuredDataService: JsonLDService
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq');
    this.subscription.add(
      this.referencesService.getReferencesPageData().subscribe((res) => {
        this.references = (res.data) ? res.data : undefined;
        this.ssrService.setState<References | undefined>('References', this.references);
        this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq');
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.faqStructuredDataService.removeSchema('structured-data-faq');
  }

  setMetaData(): void {
    if (this.references) {
      this.seoService.setSEOInformation(this.references.seoInformation);
    }
  }
}
