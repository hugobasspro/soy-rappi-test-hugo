import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RappiMetricsPage } from '../models/rappi-metrics.interface';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class RappiMetricsService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'rappi-metrics-page');
  }


  getRappiMetricsPageData(query?: StrapiQuery): Observable<StrapiHttpResponse<RappiMetricsPage>> {
    return this._getEntries<RappiMetricsPage>(query);
  }
}
