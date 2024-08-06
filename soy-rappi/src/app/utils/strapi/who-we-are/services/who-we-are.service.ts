import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhoWeArePage } from '../models/who-we-are.interface';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class WhoWeAreService  extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'who-we-are-page');
  }


  getWhoWeArePageData(query?: StrapiQuery): Observable<StrapiHttpResponse<WhoWeArePage>> {
    return this._getEntries<WhoWeArePage>(query);
  }
}
