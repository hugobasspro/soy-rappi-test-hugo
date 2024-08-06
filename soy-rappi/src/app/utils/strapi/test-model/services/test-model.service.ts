import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestModel } from '../models/test-model';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';

@Injectable({
  providedIn: 'root',
})
export class TestModelService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'test-models');
  }

  /*
    this.testModelService.getEntries().subscribe((d) => {
        console.log(d);
    });
    OR
    this.testModelService.getEntries({
      where: {
        field1: '1231',
      },
      limit: 2,
      sort: 'published_at:DESC',
    }).subscribe((d) => {
      console.log(d);
    });
  */
  getEntries(query?: StrapiQuery): Observable<StrapiHttpResponse<TestModel[]>> {
    return this._getEntries<TestModel[]>(query);
  }

  /*
    this.testModelService.getEntry(1).subscribe((d) => {
        console.log(d);
    });
  */
  getEntry(id: string | number, query?: StrapiQuery): Observable<StrapiHttpResponse<TestModel>> {
    return this._getEntry<TestModel>(id, query);
  }

  /*
    this.testModelService.updateEntry(1, {field1: 'new value'}).subscribe((d) => {
        console.log(d);
    });
  */
  updateEntry(id: string | number, data: object): Observable<StrapiHttpResponse<TestModel>> {
    return this._updateEntry<TestModel>(id, data);
  }

  /*
    this.testModelService.createEntry({field1: 'new entry 2.0'}).subscribe((d) => {
      console.log(d);
    });
  */
  createEntry(data: object): Observable<StrapiHttpResponse<TestModel>> {
    return this._createEntry<TestModel>(data);
  }

  /*
    this.testModelService.deleteEntry(2).subscribe((d) => {
      console.log(d);
    });
  */
  deleteEntry(id: string | number): Observable<StrapiHttpResponse<TestModel>> {
    return this._deleteEntry<TestModel>(id);
  }

}
