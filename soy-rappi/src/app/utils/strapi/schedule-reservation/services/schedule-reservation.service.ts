import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiService } from '../../base/services/strapi.service';
import { ScheduleReservation } from '../models/schedule-reservation.interface';

@Injectable({
  providedIn: 'root',
})
export class ScheduleReservationService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'schedule-reservation-page');
  }


  getScheduleReservationData(query?: StrapiQuery): Observable<StrapiHttpResponse<ScheduleReservation>> {
    return this._getEntries<ScheduleReservation>(query);
  }

}
