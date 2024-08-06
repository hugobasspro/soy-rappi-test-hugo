import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiService } from '../../base/services/strapi.service';
import { FormModal } from '../models/form-modal.interface';

@Injectable({
  providedIn: 'root',
})
export class FormModalService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'form-modal');
  }


  getDialogsTexts(query?: StrapiQuery): Observable<StrapiHttpResponse<FormModal>> {
    return this._getEntries<FormModal>(query);
  }
}
