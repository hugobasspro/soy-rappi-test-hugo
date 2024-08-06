import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { InformativeVideos } from '../models/informative-videos';

@Injectable({
  providedIn: 'root',
})
export class InformativeVideosService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'informative-videos-page');
  }

  getInformativeVideosPageData(): Observable<StrapiHttpResponse<InformativeVideos>> {
    return this._getEntries<InformativeVideos>();
  }
}
