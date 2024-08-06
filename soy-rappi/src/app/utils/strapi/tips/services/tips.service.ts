import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { Tips } from '../models/tips';

@Injectable({
  providedIn: 'root',
})
export class TipsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'tips-page');
  }

  getTipsPageData(): Observable<StrapiHttpResponse<Tips>> {
    return this._getEntries<Tips>();
  }
}
