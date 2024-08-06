import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../../base/models/strapi-http-response';
import { StrapiService } from '../../../base/services/strapi.service';
import { CategoriesFilters } from '../../models/categories-filters';

@Injectable({
  providedIn: 'root',
})
export class BlogCategoriesService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'categories');
  }

  getCategories(): Observable<StrapiHttpResponse<CategoriesFilters[]>> {
    return this._getEntries<CategoriesFilters[]>();
  }
}
