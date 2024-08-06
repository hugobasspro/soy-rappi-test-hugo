import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root',
})
export class StatusService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'status-page');
  }

  getStatusPageData(): Observable<StrapiHttpResponse<Status>> {
    return this._getEntries<Status>();
  }
}
