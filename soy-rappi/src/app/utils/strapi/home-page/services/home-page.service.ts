import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePage } from '../models/home-page';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class HomePageService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'home-page');
  }


  getHomePageData(query?: StrapiQuery): Observable<StrapiHttpResponse<HomePage>> {
    return this._getEntries<HomePage>(query);
  }

}
