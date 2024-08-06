import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiService } from '../../base/services/strapi.service';
import { ThankYou } from '../models/thank-you';

@Injectable({
  providedIn: 'root',
})
export class ThankYouService extends StrapiService {

  private modalRef: BsModalRef = new BsModalRef();

  constructor(protected http: HttpClient) {
    super(http, 'thank-you-page');
  }

  getEntries(): Observable<StrapiHttpResponse<ThankYou>> {
    return this._getEntries<ThankYou>();
  }

  get modalHide() {
    return this.modalRef;
  }

  set modalHide(modalRef: BsModalRef) {
    this.modalRef = modalRef;
  }
}
