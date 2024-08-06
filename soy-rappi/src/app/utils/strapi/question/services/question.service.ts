import { Injectable } from '@angular/core';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { Question } from '../../models/blocks/question.interface';
import { StrapiQuery } from '../../base/models/strapi-query';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'question');
  }

  getCategories(query?: StrapiQuery): Observable<StrapiHttpResponse<Question[]>> {
    return this._getEntries<Question[]>(query);
  }


}
