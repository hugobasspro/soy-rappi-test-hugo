import { Component, OnDestroy, OnInit } from '@angular/core';
import { multimedia } from 'src/app/utils/strapi/models/partials/multimedia.enum';
import { OrderTypeService } from '../../utils/strapi/order-type/services/order-type.service';
import { OrderType } from '../../utils/strapi/order-type/models/order-type';
import { ServerSideRenderingService } from '../../utils/server-side-rendering/services/server-side-rendering.service';
import { Subscription } from 'rxjs';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-order-types',
  templateUrl: './order-types.component.html',
  styleUrls: ['./order-types.component.scss'],
})
export class OrderTypesComponent implements OnInit, OnDestroy {

  order: OrderType | undefined = this.ssrService.getState<OrderType | undefined>('OrderType', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private orderTypeService: OrderTypeService,
              private ssrService: ServerSideRenderingService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.orderTypeService.getOrderTypePageData().subscribe((res) => {
        this.order = (res.data) ? res.data : undefined;
        this.ssrService.setState<OrderType | undefined>('OrderType', this.order);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.order) {
      this.seoService.setSEOInformation(this.order.seoInformation);
    }
  }
}
