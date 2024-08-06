
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DisciplinaryMeasuresPage } from '../models/disciplinary-measures.interface';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class DisciplinaryMeasuresService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'disciplinary-measures-page');
  }


  getDisciplinaryMeasuresPageData(query?: StrapiQuery): Observable<StrapiHttpResponse<DisciplinaryMeasuresPage>> {
    return this._getEntries<DisciplinaryMeasuresPage>(query);
  }
}
