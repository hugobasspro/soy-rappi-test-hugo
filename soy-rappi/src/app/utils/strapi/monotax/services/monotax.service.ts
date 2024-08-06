import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiService } from '../../base/services/strapi.service';
import { MonotaxPage } from '../models/monotax.interface';

@Injectable({
  providedIn: 'root',
})
export class MonotaxService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'monotax-page');
  }


  getMonotaxPageData(query?: StrapiQuery): Observable<StrapiHttpResponse<MonotaxPage>> {
    return this._getEntries<MonotaxPage>(query);
  }

}
