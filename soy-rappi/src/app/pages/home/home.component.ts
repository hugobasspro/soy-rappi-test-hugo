import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadContentService } from 'src/app/utils/load-content/load-content.service';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';
import { NewsBlogsService } from 'src/app/utils/strapi/blog/services/new-blogs/news-blogs.service';
import { HomePage } from 'src/app/utils/strapi/home-page/models/home-page';
import { HomePageService } from 'src/app/utils/strapi/home-page/services/home-page.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { JsonLDService } from 'src/app/utils/json-ld/json-ls.service';
import faqSchema from 'src/app/utils/json-ld/schemas/faq/home/faqSchema.json';
import faqSchemaBr from 'src/app/utils/json-ld/schemas/faq/home/faqSchemaBr.json';
import { getTimezone } from "countries-and-timezones";
import { StructuredDataSchemaFaq } from 'src/app/utils/json-ld/schemas/faq/faq-schema.interface';
import { locale } from 'src/environments/locale/locale';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {

  isMobile:boolean = false;

  homePageData: HomePage | undefined = this.ssrService.getState<HomePage | undefined>('HomePage', undefined);

  lastThreeNew: BlogEntry[] = this.ssrService.getState<BlogEntry[] | []>('lastThreeNewHome', []);

  private _subscription: Subscription = new Subscription();
  showRedirectModalLoad: boolean;
  isLoaded: boolean;

  private faqSchema: StructuredDataSchemaFaq = locale.slice(-2).toUpperCase() !== 'BR' ? faqSchema : faqSchemaBr;

  constructor(
    private homePageService: HomePageService,
    public uploadService: UploadService,
    private ssrService: ServerSideRenderingService,
    private seoService: SeoInformationService,
    private newsBlogsService: NewsBlogsService,
    private breakpointObserver: BreakpointObserver,
    public _loadContentService: LoadContentService,
    private faqStructuredDataService: JsonLDService
  ) {
    // detect screen size changes
    this.showRedirectModalLoad = false;
    this.isLoaded = false;
    this.breakpointObserver
      .observe(['(max-width: 1023px)'])
      .subscribe((result: BreakpointState) => {
        this.isMobile = result.matches;
      });
  }

  ngOnInit(): void {
    this.setMetaData();
    this.faqStructuredDataService.insertSchema(JSON.stringify(this.faqSchema), 'structured-data-faq')
    this._subscription.add(
      this.homePageService.getHomePageData().subscribe(res => {
        this.homePageData = (res.data) ? res.data : undefined;
        this.ssrService.setState<HomePage | undefined>('HomePage', this.homePageData);
        this.setMetaData();
        this.showRedirectModalLoad = true;
        this.isLoaded = true;
      }),
    );

    this._subscription.add(
      this.newsBlogsService.getLastNews(3).subscribe((res) => {
        this.lastThreeNew = (res.data) ? res.data : [];
        this.ssrService.setState<BlogEntry[] | undefined>('lastThreeNewHome', this.lastThreeNew);
        this.setMetaData();
      }),
    );
  }


  ngOnDestroy(): void {
    this._subscription.unsubscribe();
    this.faqStructuredDataService.removeSchema('structured-data-faq');
  }

  setMetaData(): void {
    if (this.homePageData) {
      this._loadContentService.contentReady();
      this.seoService.setSEOInformation(this.homePageData.seoInformation);
    }
  }
}
