import { Injectable } from '@angular/core';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { ContestData } from '../models/contest';
import { StrapiQuery } from '../../base/models/strapi-query';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root'
})
export class ContestService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'contests');
  }

  entries(query?: StrapiQuery): Observable<StrapiHttpResponse<ContestData[]>> {
    return this._getEntries<ContestData[]>(query);
  }

  entry(id: number | number): Observable<StrapiHttpResponse<ContestData>> {
    return this._getEntry<ContestData>(id);
  }
}
