import { Injectable } from '@angular/core';
import { Link } from '../models/link';
import { StrapiQuery } from '../../base/models/strapi-query';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LinksService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'links');
  }

  getEntries(query?: StrapiQuery): Observable<StrapiHttpResponse<Link[]>> {
    return this._getEntries<Link[]>(query);
  }
}
