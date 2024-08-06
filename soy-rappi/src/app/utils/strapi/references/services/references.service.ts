import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { References } from '../models/references';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'references-page');
  }

  getReferencesPageData(): Observable<StrapiHttpResponse<References>> {
    return this._getEntries<References>();
  }
}
