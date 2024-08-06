import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { AcceptingOrder } from 'src/app/utils/strapi/accepting-orders/models/accepting-order';
import { AcceptingOrderService } from 'src/app/utils/strapi/accepting-orders/services/accepting-order.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-accepting-orders',
  templateUrl: './accepting-orders.component.html',
  styleUrls: ['./accepting-orders.component.scss'],
})
export class AcceptingOrdersComponent implements OnInit, OnDestroy {

  acceptingOrder: AcceptingOrder | undefined = this.ssrService.getState<AcceptingOrder | undefined>(
    'AcceptingOrder', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    public uploadService: UploadService,
    private acceptingOrderService: AcceptingOrderService,
    private seoService: SeoInformationService,
    private ssrService: ServerSideRenderingService,
  ) { }

  ngOnInit() {
    this.setMetaData();
    this._subscription.add(
      this.acceptingOrderService.getAcceptOrderData().subscribe(res => {
        this.acceptingOrder = (res.data) ? res.data : undefined;
        this.ssrService.setState<AcceptingOrder | undefined>('AcceptingOrder', this.acceptingOrder);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.acceptingOrder) {
      this.seoService.setSEOInformation(this.acceptingOrder.seoInformation);
    }
  }
}

