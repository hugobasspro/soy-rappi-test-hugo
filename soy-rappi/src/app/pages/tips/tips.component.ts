import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { Tips } from 'src/app/utils/strapi/tips/models/tips';
import { TipsService } from 'src/app/utils/strapi/tips/services/tips.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss'],
})
export class TipsComponent implements OnInit, OnDestroy {

  tips: Tips | undefined = this.ssrService.getState<Tips | undefined>('Tips', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private tipsService: TipsService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.tipsService.getTipsPageData().subscribe((res) => {
        this.tips = (res.data) ? res.data : undefined;
        this.ssrService.setState<Tips | undefined>('Tips', this.tips);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.tips) {
      this.seoService.setSEOInformation(this.tips.seoInformation);
    }
  }
}
