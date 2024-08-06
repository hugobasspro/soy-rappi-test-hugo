import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { StapsBlock } from 'src/app/utils/strapi/models/blocks/staps.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { WhoWeArePage } from 'src/app/utils/strapi/who-we-are/models/who-we-are.interface';
import { WhoWeAreService } from 'src/app/utils/strapi/who-we-are/services/who-we-are.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss'],
})
export class WhoWeAreComponent  implements OnInit, OnDestroy {

  whoWeArePageData: WhoWeArePage | undefined =
  this.ssrService.getState<WhoWeArePage | undefined>('WhoWeArePage', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    private ssrService: ServerSideRenderingService,
    public uploadService: UploadService,
    private rappiMetricsService: WhoWeAreService,
    private seoService: SeoInformationService,
  ) { }

  getStapsLen(staps:StapsBlock[] | undefined) {
    return (staps ? staps.length - 1 : 0);
  }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.rappiMetricsService.getWhoWeArePageData().subscribe(res => {
        this.whoWeArePageData = (res.data) ? res.data : undefined;
        this.ssrService.setState<WhoWeArePage | undefined>('WhoWeArePage', this.whoWeArePageData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.whoWeArePageData) {
      this.seoService.setSEOInformation(this.whoWeArePageData.seoInformation);
    }
  }
}
