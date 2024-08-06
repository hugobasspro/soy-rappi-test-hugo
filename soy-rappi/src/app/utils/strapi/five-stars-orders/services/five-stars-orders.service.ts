import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { FiveStarsOrders } from '../models/five-stars-orders';

@Injectable({
  providedIn: 'root',
})
export class FiveStarsOrdersService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http,'five-stars-orders-page');
  }

  getFiveStarsOrdersPageData(): Observable<StrapiHttpResponse<FiveStarsOrders>> {
    return this._getEntries<FiveStarsOrders>();
  }
}
