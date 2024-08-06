import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankAccountAndCalendar } from '../models/bank-account-and-calendar';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class BankAccountAndCalendarService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'link-bank-account-page');
  }

  getBankAccountData(query?: StrapiQuery): Observable<StrapiHttpResponse<BankAccountAndCalendar>> {
    return this._getEntries<BankAccountAndCalendar>(query);
  }
}
