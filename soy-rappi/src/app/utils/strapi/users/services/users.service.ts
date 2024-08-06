import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { User } from '../models/user';
import { UserLoginParams } from '../models/user-login-params';
import { AppRecaptchaV3Service } from '../../../app-recaptcha-v3/services/app-recaptcha-v3.service';
import { UserRegisterParams } from '../models/user-register-params';
import { AuthService } from '../../auth/services/auth.service';


@Injectable({
  providedIn: 'root',
})
export class UsersService extends StrapiService {
  user = new BehaviorSubject<User | undefined>(undefined);

  constructor(protected http: HttpClient,
              protected auth: AuthService,
              private appRecaptchaV3Service: AppRecaptchaV3Service) {
    super(http, 'users', auth);
  }

  getEntries(query?: StrapiQuery): Observable<StrapiHttpResponse<User[]>> {
    return this._getEntries<User[]>(query);
  }

  getEntry(id: string | number, query?: StrapiQuery): Observable<StrapiHttpResponse<User>> {
    return this._getEntry<User>(id, query);
  }

  updateEntry(id: string | number, data: object): Observable<StrapiHttpResponse<User>> {
    return this._updateEntry<User>(id, data);
  }

  createEntry(data: object): Observable<StrapiHttpResponse<User>> {
    return this._createEntry<User>(data);
  }

  deleteEntry(id: string | number): Observable<StrapiHttpResponse<User>> {
    return this._deleteEntry<User>(id);
  }

  login(params: UserLoginParams, useRecaptchaV3?: boolean): Observable<StrapiHttpResponse<User>> {
    const useRecaptcha = useRecaptchaV3 === undefined || !!useRecaptchaV3;
    const login$ = (params: UserLoginParams): Observable<StrapiHttpResponse<User>> => {
      return this.http.post(`${this.getApiEndpoint()}/auth/local`, params)
        .pipe(
          tap((res: any) => {
            this.auth.setToken(res.jwt);
            this.user.next(res.user);
          }),
          map((res: any) => {
            return this.formatHttpOkResponse(res.user as User);
          }),
          catchError((err: HttpErrorResponse) => {
            return of(this.formatHttpErrorResponse(err));
          }),
        );
    };

    if (useRecaptcha) {
      return this.appRecaptchaV3Service
        .getToken('login')
        .pipe(
          switchMap((token): Observable<StrapiHttpResponse<User>> => {
            if (!token) {
              throw new Error(`Error getting Google token`);
            }
            const _params = Object.assign({}, params, { recaptchaCode: token });
            return login$(_params);
          }),
          catchError((err) => {
            return of(this.formatHttpErrorResponse(err));
          }),
        );
    } else {
      return login$(params);
    }
  }

  register(params: UserRegisterParams, useRecaptchaV3?: boolean): Observable<StrapiHttpResponse<User>> {
    const useRecaptcha = useRecaptchaV3 === undefined || !!useRecaptchaV3;
    const register$ = (params: UserRegisterParams): Observable<StrapiHttpResponse<User>> => {
      return this.http.post(`${this.getApiEndpoint()}/auth/local/register`, params)
        .pipe(
          tap((res: any) => {
            this.auth.setToken(res.jwt);
            this.user.next(res.user);
          }),
          map((res: any) => {
            return this.formatHttpOkResponse(res.user as User);
          }),
          catchError((err: HttpErrorResponse) => {
            return of(this.formatHttpErrorResponse(err));
          }),
        );
    };

    if (useRecaptcha) {
      return this.appRecaptchaV3Service
        .getToken('register')
        .pipe(
          switchMap((token): Observable<StrapiHttpResponse<User>> => {
            if (!token) {
              throw new Error(`Error getting Google token`);
            }
            const _params = Object.assign({}, params, { recaptchaCode: token });
            return register$(_params);
          }),
          catchError((err) => {
            return of(this.formatHttpErrorResponse(err));
          }),
        );
    } else {
      return register$(params);
    }
  }

  readMe(query?: StrapiQuery): Observable<StrapiHttpResponse<User>> {
    return this._getEntry<User>('me', query)
      .pipe(
        tap((res: StrapiHttpResponse<User>) => {
          if (res.data) {
            this.user.next(res.data);
          }
        }),
      );
  }

  logout(): void {
    this.auth.cleanToken();
    this.user.next(undefined);
  }
}
