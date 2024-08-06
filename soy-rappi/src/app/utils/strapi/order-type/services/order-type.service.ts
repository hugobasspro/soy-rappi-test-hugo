import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { OrderType } from '../../order-type/models/order-type';

@Injectable({
  providedIn: 'root',
})
export class OrderTypeService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'order-types-page');
    this.resource = 'order-types-page';
  }

  getOrderTypePageData(): Observable<StrapiHttpResponse<OrderType>> {
    return this._getEntries<OrderType>();
  }
}
