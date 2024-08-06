import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { WhatYouHaveToKnow } from 'src/app/utils/strapi/what-you-have-to-know/models/what-you-have-to-know';
import { WhatYouHaveService } from 'src/app/utils/strapi/what-you-have-to-know/services/what-you-have-to-know.service';
import { ServerSideRenderingService } from '../../utils/server-side-rendering/services/server-side-rendering.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-what-you-have-to-know',
  templateUrl: './what-you-have-to-know.component.html',
  styleUrls: ['./what-you-have-to-know.component.scss'],
})
export class WhatYouHaveToKnowComponent implements OnInit, OnDestroy {

  whatYouHaveToKnowData: WhatYouHaveToKnow | undefined = this.ssrService
    .getState<WhatYouHaveToKnow | undefined>('haveToKnow', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    private whatYouHaveToKnowService: WhatYouHaveService,
    private ssrService: ServerSideRenderingService,
    private seoService: SeoInformationService,
    private activeRouter: ActivatedRoute,
    private scroller: ViewportScroller,
    public uploadService: UploadService,
  ) { }

  ngOnInit() {
    this.setMetaData();
    this._subscription.add(
      this.whatYouHaveToKnowService.getWhatYouHaveToKnowData().subscribe(res => {
        if (res.data) {
          this.whatYouHaveToKnowData = res.data;
          this.ssrService.setState<WhatYouHaveToKnow>('haveToKnow', res.data);
          this.setMetaData();
        }
      }),
    );
    this._subscription.add(
      this.activeRouter.fragment.subscribe(value => {
        if (value) {
          setTimeout(() => {
            this.scroller.scrollToAnchor(value);
          }, 1800);
        }
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.whatYouHaveToKnowData) {
      this.seoService.setSEOInformation(this.whatYouHaveToKnowData.seoInformation);
    }
  }
}
