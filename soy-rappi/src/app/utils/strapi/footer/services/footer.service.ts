import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiService } from '../../base/services/strapi.service';
import { Footer } from '../models/footer.interface';

@Injectable({
  providedIn: 'root',
})
export class FooterService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'footer');
  }


  getFooterData(query?: StrapiQuery): Observable<StrapiHttpResponse<Footer>> {
    return this._getEntries<Footer>(query);
  }

}
