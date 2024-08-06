import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { StrapiJwt } from '../models/strapi-jwt';
import { AppLocalStorageService } from '../../../app-local-storage/services/app-local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  token = new BehaviorSubject<string | undefined>(undefined);

  isAuthenticated = new BehaviorSubject<boolean>(false);

  private jwt: string | undefined;

  private jwtKeyName: string = this.btoa('jwt');

  constructor(private localStorage: AppLocalStorageService) {
    const jwt = this.localStorage.getItem(this.jwtKeyName) || undefined;
    if (jwt) {
      this.jwt = this.atob(jwt);
      this.token.next(this.jwt);
    }
    this.parseTokenAndEmits();
  }

  setToken(jwt: string) {
    this.jwt = jwt;
    this.localStorage.setItem(this.jwtKeyName, this.btoa(this.jwt));
    this.token.next(this.jwt);
    this.parseTokenAndEmits();
  }

  cleanToken() {
    this.localStorage.removeItem(this.jwtKeyName);
    this.jwt = undefined;
    this.token.next(this.jwt);
    this.parseTokenAndEmits();
  }

  getToken() {
    return this.jwt;
  }

  private parseTokenAndEmits() {
    if (!this.jwt) {
      this.isAuthenticated.next(false);
      return;
    }
    const decoded: StrapiJwt = jwt_decode(this.jwt);
    const isAuth: boolean = !!decoded && !!decoded.exp && new Date(decoded.exp * 1000) > new Date();
    this.isAuthenticated.next(isAuth);
  }

  private btoa(value: string): string {
    try {
      const ret = btoa(value);
      return ret;
    } catch (e) {
      return '';
    }
  }

  private atob(value: string): string {
    try {
      const ret = atob(value);
      return ret;
    } catch (e) {
      return '';
    }
  }
}
