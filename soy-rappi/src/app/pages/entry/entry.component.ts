import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicPageService } from 'src/app/partials/partials-utils/services/dynamic-page/dynamic-page.service';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { DynamicPage } from 'src/app/utils/strapi/dynamic-page/models/dynamic-page';
import { DynamicDataPageService } from 'src/app/utils/strapi/dynamic-page/services/dynamic-page.service';
import { SeoInformationService } from 'src/app/utils/strapi/seo/services/seo-information.service';
import { DynamicPageDirective } from '../../utils/directives/dynamic-page-directive/dynamic-page.directive';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent implements OnInit {

  @ViewChild(DynamicPageDirective, { static: true }) appDynamicPage!: DynamicPageDirective;

  dynamic: DynamicPage[] = this.ssrService.getState<DynamicPage[]>('DynamicPage', []);

  constructor(private router: Router,
              private dynamicDataPageService: DynamicDataPageService,
              private ssrService: ServerSideRenderingService,
              private seoService: SeoInformationService,
              private dynamicPageService: DynamicPageService) { }


  ngOnInit(): void {
    const slug = this.router.url.replace('/','');
    this.setMetaData();
    this.dynamicDataPageService.getDynamicPageData(slug).subscribe((res) => {
      this.dynamic = (res.data) ? res.data : [];
      const contens = res.data?.map((item) => {
        return item.content;
      });
      for (let item of (contens) ? contens[0] : []) {
        this.dynamicPageService.createComponent(this.appDynamicPage.viewContainerRef, item);
      }
      this.ssrService.setState<DynamicPage[]>('DynamicPage', this.dynamic);
      this.setMetaData();
    });
  }

  setMetaData(): void {
    if (this.dynamic.length) {
      this.seoService.setSEOInformation(this.dynamic[0].seoInformation);
    }
  }
}
