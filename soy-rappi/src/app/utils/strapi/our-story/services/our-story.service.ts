import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiService } from '../../base/services/strapi.service';
import { OurStoryPage } from '../models/our-story.interface';

@Injectable({
  providedIn: 'root',
})
export class OurStoryService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'our-story-page');
  }


  getOurStoryPageData(query?: StrapiQuery): Observable<StrapiHttpResponse<OurStoryPage>> {
    return this._getEntries<OurStoryPage>(query);
  }

}
