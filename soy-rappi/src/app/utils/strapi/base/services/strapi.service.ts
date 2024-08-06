import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as qs from 'qs';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { locale } from 'src/environments/locale/locale';
import { AuthService } from '../../auth/services/auth.service';
import { StrapiHttpResponse } from '../models/strapi-http-response';
import { StrapiQuery } from '../models/strapi-query';

export class StrapiService {
  protected baseUrl = environment.backendAPIURL;

  protected prefixUrl = environment.backendAPIPrefix;

  protected resource = 'content';

  protected http: HttpClient;

  protected auth: AuthService | undefined;

  constructor(http: HttpClient, resourceName: string, auth?: AuthService) {
    this.http = http;
    this.auth = auth;
    this.resource = resourceName;
  }

  countEntries(query?: StrapiQuery): Observable<StrapiHttpResponse<number>> {
    return this.http.get(`${this.getApiEndpoint()}/${this.resource}/count${this.buildQueryString(query)}`,
                         {
                           headers: this.getHeaders(),
                         })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<number>(Number(res));
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected getApiEndpoint(): string {
    return (this.prefixUrl) ? `${this.baseUrl}/${this.prefixUrl}` : this.baseUrl;
  }

  protected _getEntries<T>(query?: StrapiQuery): Observable<StrapiHttpResponse<T>> {
    if (query) {
      query.locale = locale;
    } else {
      query = {
        locale: locale,
      };
    }
    return this.http.get<T>(`${this.getApiEndpoint()}/${this.resource}${this.buildQueryString(query)}`,
                            {
                              headers: this.getHeaders(),
                            })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<T>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected _getEntry<T>(id: string | number, query?: StrapiQuery): Observable<StrapiHttpResponse<T>> {

    if (query) {
      query.locale = locale;
    } else {
      query = {
        locale: locale,
      };
    }

    return this.http.get<T>(`${this.getApiEndpoint()}/${this.resource}/${String(id)}${this.buildQueryString(query)}`,
                            {
                              headers: this.getHeaders(),
                            })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<T>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected _updateEntry<T>(id: string | number, data: object): Observable<StrapiHttpResponse<T>> {
    return this.http.put<T>(`${this.getApiEndpoint()}/${this.resource}/${String(id)}`,
                            data,
                            {
                              headers: this.getHeaders(),
                            })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<T>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected _createEntry<T>(data: object): Observable<StrapiHttpResponse<T>> {
    return this.http.post<T>(`${this.getApiEndpoint()}/${this.resource}`,
                             data,
                             {
                               headers: this.getHeaders(),
                             })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<T>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected _deleteEntry<T>(id: string | number): Observable<StrapiHttpResponse<T>> {
    return this.http.delete<T>(`${this.getApiEndpoint()}/${this.resource}/${String(id)}`,
                               {
                                 headers: this.getHeaders(),
                               })
      .pipe(
        map(res => {
          return this.formatHttpOkResponse<T>(res);
        }),
        catchError((err: HttpErrorResponse) => {
          return of(this.formatHttpErrorResponse(err));
        }),
      );
  }

  protected getHeaders(): HttpHeaders | undefined {
    const token = !!this.auth ? this.auth.getToken() : undefined;
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      });
    }

    return undefined;
  }

  protected buildQueryString(query?: StrapiQuery): string {
    if (!query) {
      return '';
    }
    const strapiQuery = {
      _where: query.where || undefined,
      _sort: query.sort || undefined,
      _limit: query.limit || undefined,
      _start: query.start || undefined,
      _locale: query.locale || undefined,
      _q: query.q || undefined,
      populate: query.populate || undefined,
    };

    const q = qs.stringify(strapiQuery);
    return q && q.length ? `?${q}` : '';
  }

  protected formatHttpErrorResponse(err: HttpErrorResponse) {
    return {
      err: {
        error: err.error,
        message: err.message,
        name: err.name,
        code: err.status,
      },
      data: null,
    };
  }

  protected formatHttpOkResponse<T>(data: T): StrapiHttpResponse<T> {
    return {
      err: null,
      data: data,
    };
  }
}
