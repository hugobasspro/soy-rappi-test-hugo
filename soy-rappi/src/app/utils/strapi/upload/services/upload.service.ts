import { Injectable } from '@angular/core';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth/services/auth.service';
import { Observable, of } from 'rxjs';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { StrapiFile } from '../models/strapi-file';
import { catchError, map } from 'rxjs/operators';
import { StrapiQuery } from '../../base/models/strapi-query';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UploadService extends StrapiService {

  constructor(protected http: HttpClient,
              protected auth: AuthService) {
    super(http, 'upload/files', auth);
    this.prefixUrl = '';
  }

  getEntries(query?: StrapiQuery): Observable<StrapiHttpResponse<StrapiFile[]>> {
    return this._getEntries<StrapiFile[]>(query);
  }

  getEntry(id: string | number, query?: StrapiQuery): Observable<StrapiHttpResponse<StrapiFile>> {
    return this._getEntry<StrapiFile>(id, query);
  }

  build(asset: string): string {
    if (asset.startsWith('http')) {
      return asset;
    } else {
      return this.baseUrl + (asset.startsWith('/') || this.baseUrl.endsWith('/') ? '' : '/') + asset;
    }
  }

  // TODO: (juanescobar) this method is missing manual test
  uploadFile(file: Blob | [Blob],
             resourceName?: string,
             resourceId?: string | number,
             fieldName?: string,
             pluginName?: string): Observable<StrapiHttpResponse<StrapiFile[]>> {
    const formData: FormData = new FormData();
    if (Array.isArray(file)) {
      file.forEach(f => formData.append('files', f));
    } else {
      formData.append('files', file);
    }

    if (!!resourceName && !!resourceId && !!fieldName && !!pluginName) {
      formData.append('refId', String(resourceId));
      formData.append('ref', resourceName); // It is not plural most of the cases, for instance test-model
      formData.append('source', pluginName); // users-permissions or application
      formData.append('field', fieldName);
    }

    return this.uploadFileForm(formData);
  }

  makeUrl(item: any) {
    const imageObj = item;
    if (!!imageObj && !!imageObj.url)
      return this.build(imageObj.url);
    else
      return 'assets/images/global/rappi_dummy.jpg';
  }

  uploadFileForm(formData: FormData): Observable<StrapiHttpResponse<StrapiFile[]>> {
    return this.http.post(`${this.baseUrl}/upload`, formData, {
      headers: this.uploadHeaders(),
    })
      .pipe(
        map((res) => {
          return this.formatHttpOkResponse(res as StrapiFile[]);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected uploadHeaders(): HttpHeaders | undefined {
    const token = !!this.auth ? this.auth.getToken() : undefined;
    if (token) {
      return new HttpHeaders({
        'Authorization': `Bearer ${token}`,
      });
    }

    return undefined;
  }
}
