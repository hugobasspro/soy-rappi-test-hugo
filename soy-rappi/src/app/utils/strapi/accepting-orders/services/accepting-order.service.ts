import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcceptingOrder } from '../models/accepting-order';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
@Injectable({
  providedIn: 'root',
})
export class AcceptingOrderService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'delivery-tips-page');
  }


  getAcceptOrderData(query?: StrapiQuery): Observable<StrapiHttpResponse<AcceptingOrder>> {
    return this._getEntries<AcceptingOrder>(query);
  }
}
