import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bag } from '../models/bag';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
@Injectable({
  providedIn: 'root',
})
export class BagService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'acquire-rappi-bag');
  }


  getBagData(query?: StrapiQuery): Observable<StrapiHttpResponse<Bag>> {
    return this._getEntries<Bag>(query);
  }
}
