import { Injectable } from '@angular/core';
import { PartnerCategory} from '../models/partner-category';
import { StrapiQuery } from '../../base/models/strapi-query';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PartnerCategoriesService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'partner-categories');
  }

  getEntries(query?: StrapiQuery): Observable<StrapiHttpResponse<PartnerCategory[]>> {
    return this._getEntries<PartnerCategory[]>(query);
  }
}
