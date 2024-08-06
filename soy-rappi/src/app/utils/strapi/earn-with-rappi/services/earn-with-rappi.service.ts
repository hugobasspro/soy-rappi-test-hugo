import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiService } from '../../base/services/strapi.service';
import { EarnWithRappi } from '../models/earn-with-rappi.interface';

@Injectable({
  providedIn: 'root',
})
export class EarnWithRappiService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'how-works-page');
  }


  getEarnWithRappiData(query?: StrapiQuery): Observable<StrapiHttpResponse<EarnWithRappi>> {
    return this._getEntries<EarnWithRappi>(query);
  }

}
