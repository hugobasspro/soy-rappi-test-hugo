import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { FiveStarsOrders } from 'src/app/utils/strapi/five-stars-orders/models/five-stars-orders';
import { FiveStarsOrdersService } from 'src/app/utils/strapi/five-stars-orders/services/five-stars-orders.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-five-stars-orders',
  templateUrl: './five-stars-orders.component.html',
  styleUrls: ['./five-stars-orders.component.scss'],
})
export class FiveStarsOrdersComponent implements OnInit, OnDestroy {

  fiveStars: FiveStarsOrders | undefined = this.ssrService.getState<FiveStarsOrders | undefined>(
    'FiveStarsOrders', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private fiveStarsOrdersService: FiveStarsOrdersService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.fiveStarsOrdersService.getFiveStarsOrdersPageData().subscribe((res) => {
        this.fiveStars = (res.data) ? res.data : undefined;
        this.ssrService.setState<FiveStarsOrders | undefined>('FiveStarsOrders', this.fiveStars);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.fiveStars) {
      this.seoService.setSEOInformation(this.fiveStars.seoInformation);
    }
  }
}
