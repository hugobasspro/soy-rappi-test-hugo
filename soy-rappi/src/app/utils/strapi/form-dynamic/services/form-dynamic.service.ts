import { Injectable } from '@angular/core';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormDynamicService extends StrapiService{

  constructor(protected http: HttpClient) {
    super(http, 'data-forms');
  }

  createEntry(data: object) {
    return this._createEntry(data);
  }
}
