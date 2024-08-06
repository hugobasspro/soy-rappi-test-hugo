import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhatYouHaveToKnow } from '../models/what-you-have-to-know';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class WhatYouHaveService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'new-deliverer-page');
  }


  getWhatYouHaveToKnowData(query?: StrapiQuery): Observable<StrapiHttpResponse<WhatYouHaveToKnow>> {
    return this._getEntries<WhatYouHaveToKnow>(query);
  }

}
