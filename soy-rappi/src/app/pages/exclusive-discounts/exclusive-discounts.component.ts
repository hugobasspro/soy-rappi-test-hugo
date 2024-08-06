import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { ExclusiveDiscountsService } from
  'src/app/utils/strapi/exclusive-discounts/services/exclusive-discounts.service';
import { ExclusiveDiscounts } from 'src/app/utils/strapi/exclusive-discounts/models/exclusive-discounts';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-exclusive-discounts',
  templateUrl: './exclusive-discounts.component.html',
  styleUrls: ['./exclusive-discounts.component.scss'],
})
export class ExclusiveDiscountsComponent implements OnInit, OnDestroy {

  exclusive: ExclusiveDiscounts | undefined = this.ssrService.getState<ExclusiveDiscounts | undefined>(
    'ExclusiveDiscounts', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private exclusiveDiscountsService: ExclusiveDiscountsService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.exclusiveDiscountsService.getExclusiveDiscountsPageData().subscribe((res) => {
        this.exclusive = (res.data) ? res.data : undefined;
        this.ssrService.setState<ExclusiveDiscounts | undefined>('ExclusiveDiscounts',this.exclusive);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.exclusive) {
      this.seoService.setSEOInformation(this.exclusive.seoInformation);
    }
  }
}
