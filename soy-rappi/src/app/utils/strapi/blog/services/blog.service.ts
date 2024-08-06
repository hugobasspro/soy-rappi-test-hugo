import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'blog');
  }

  getBlogPageData(): Observable<StrapiHttpResponse<Blog>> {
    return this._getEntries<Blog>();
  }
}
