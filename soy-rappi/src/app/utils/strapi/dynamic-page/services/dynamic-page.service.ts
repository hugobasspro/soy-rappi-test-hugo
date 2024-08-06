import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { DynamicPage } from '../models/dynamic-page';

@Injectable({
  providedIn: 'root',
})
export class DynamicDataPageService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'news-blogs');
  }

  getDynamicPageData(slug: string): Observable<StrapiHttpResponse<DynamicPage[]>> {
    return this._getEntries<DynamicPage[]>({
      where: {
        slug: slug,
      },
    },
    );
  }
}
