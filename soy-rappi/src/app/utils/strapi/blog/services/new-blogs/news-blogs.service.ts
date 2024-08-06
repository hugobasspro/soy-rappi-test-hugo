import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../../base/models/strapi-http-response';
import { StrapiQuery } from '../../../base/models/strapi-query';
import { StrapiService } from '../../../base/services/strapi.service';
import { BlogEntry } from '../../models/blog-categories';

@Injectable({
  providedIn: 'root',
})
export class NewsBlogsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'news-blogs');
  }

  getEntries(query: StrapiQuery): Observable<StrapiHttpResponse<BlogEntry[]>> {
    return this._getEntries<BlogEntry[]>(query);
  }

  getCategoriesBlog(): Observable<StrapiHttpResponse<BlogEntry[]>> {
    return this._getEntries<BlogEntry[]>();
  }

  getMostRecent(limit: number): Observable<StrapiHttpResponse<BlogEntry[]>> {
    return this._getEntries<BlogEntry[]>(
      {
        sort: 'published_at:DESC',
        limit,
      },
    );
  }

  getLastNews(limit: number): Observable<StrapiHttpResponse<BlogEntry[]>> {
    return this._getEntries<BlogEntry[]>(
      {
        where: {
          'typeCategory.code': 'NEWS',
        },
        sort: 'published_at:DESC',
        limit,
      },
    );
  }

  getStories(limit: number): Observable<StrapiHttpResponse<BlogEntry[]>> {
    return this._getEntries<BlogEntry[]>(
      {
        where:
          { 'typeCategory.code': 'REAL_STORIES' },
        sort: 'published_at:DESC',
        limit,
      },
    );
  }
}
