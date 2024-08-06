import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { RappiTools } from '../models/rappi-tools';

@Injectable({
  providedIn: 'root',
})
export class RappiToolsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'rappi-tools');
  }

  getRappiToolsPageData(): Observable<StrapiHttpResponse<RappiTools>> {
    return this._getEntries<RappiTools>();
  }
}
