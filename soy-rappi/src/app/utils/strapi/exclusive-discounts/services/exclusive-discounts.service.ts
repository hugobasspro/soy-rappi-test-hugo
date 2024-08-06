import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { ExclusiveDiscounts } from '../models/exclusive-discounts';

@Injectable({
  providedIn: 'root',
})
export class ExclusiveDiscountsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'exclusive-discounts-page');
  }

  getExclusiveDiscountsPageData(): Observable<StrapiHttpResponse<ExclusiveDiscounts>> {
    return this._getEntries<ExclusiveDiscounts>();
  }
}
