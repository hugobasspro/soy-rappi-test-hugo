import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCard } from '../models/shopping-card';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCardService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'increase-your-profit');
  }

  getShoppingCardPageData(query?: StrapiQuery): Observable<StrapiHttpResponse<ShoppingCard>> {
    return this._getEntries<ShoppingCard>(query);
  }

}
