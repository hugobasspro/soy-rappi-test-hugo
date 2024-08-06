import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from '../models/countries';
import { environment } from '../../../../../environments/environment';
import { Cities } from '../models/cities';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {

  countries: string = '/api/ms/country-data/available-countries-storekeepers';

  city: string = '/rt-registration/pub/cities';

  constructor(private http: HttpClient) { }

  getCountries() {
    return this.http.get<Countries[]>(environment.rappiUrl + `${this.countries}`);
  }

  getCities(locale: string, isoCode: string) {
    return this.http.get<Cities[]>(this.getRappiUrl(locale) + `${this.city}?iso_code=${isoCode}`);
  }

  getLocale(lang: string) {
    switch (lang) {
      case 'en': {
        return 'CO';
        break;
      }

      case 'es-AR': {
        return 'AR';
        break;
      }

      case 'es-CO': {
        return 'CO';
        break;
      }

      case 'es-PE': {
        return 'PE';
        break;
      }

      case 'es-EC': {
        return 'EC';
        break;
      }

      case 'es-UY': {
        return 'UY';
        break;
      }

      case 'es-CL': {
        return 'CL';
        break;
      }

      case 'pt-BR': {
        return 'BR';
        break;
      }

      case 'es-MX': {
        return 'MX';
        break;
      }

      case 'es-CR': {
        return 'CR';
        break;
      }

      case 'es-BO': {
        return 'BO';
        break;
      }

      case 'es-PY': {
        return 'PY';
        break;
      }

      default:
        return 'CO';
        break;
    }
  }

  getRappiUrl(value: string) {
    switch (value) {
      case 'en': {
        return environment.rappiUrl;
        break;
      }

      case 'es-AR': {
        return environment.rappiUrlAr;
        break;
      }

      case 'es-CO': {
        return environment.rappiUrl;
        break;
      }

      case 'es-PE': {
        return environment.rappiUrlPe;
        break;
      }

      case 'es-EC': {
        return environment.rappiUrlEc;
        break;
      }

      case 'es-UY': {
        return environment.rappiUrlUy;
        break;
      }

      case 'es-CL': {
        return environment.rappiUrlCl;
        break;
      }

      case 'pt-BR': {
        return environment.rappiUrlBr;
        break;
      }

      case 'es-MX': {
        return environment.rappiUrlMx;
        break;
      }

      case 'es-CR': {
        return environment.rappiUrlCr;
        break;
      }

      case 'es-BO': {
        return environment.rappiUrlCr;
        break;
      }

      case 'es-PY': {
        return environment.rappiUrl;
        break;
      }

      default:
        return environment.rappiUrl;
        break;
    }
  }
}
