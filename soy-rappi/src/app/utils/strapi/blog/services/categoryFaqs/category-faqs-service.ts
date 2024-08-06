import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../../base/models/strapi-http-response';
import { StrapiService } from '../../../base/services/strapi.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryFaqsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'category-faqs'); 
  }

  getCategories(): Observable<StrapiHttpResponse<any>> {
    return this._getEntries();
  }

 

}
