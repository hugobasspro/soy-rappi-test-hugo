import { Injectable } from '@angular/core';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { QuestionsFaqs } from '../../models/blocks/question.interface';
import { StrapiQuery } from '../../base/models/strapi-query';

@Injectable({
  providedIn: 'root'
})
export class QuestionFaqsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'questions-faqs');
  }
  getQuestions(start: number = 0, limit: number = 100): Observable<StrapiHttpResponse<QuestionsFaqs[]>> {
    const query: StrapiQuery = {
      start: start,
      limit: limit
    };
    return this._getEntries<QuestionsFaqs[]>(query);
  }

}


  