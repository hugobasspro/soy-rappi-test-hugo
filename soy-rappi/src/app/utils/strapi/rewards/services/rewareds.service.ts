import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { RewardsPage } from '../models/rewards.interface';

@Injectable({
  providedIn: 'root',
})
export class RewaredsService extends StrapiService {

  constructor(protected http: HttpClient) {
    super(http, 'rewards-page');
  }

  getRewardsPageData(): Observable<StrapiHttpResponse<RewardsPage>> {
    return this._getEntries<RewardsPage>();
  }
}
