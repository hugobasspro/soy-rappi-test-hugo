import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WhatsappValidationCode } from '../models/whatsapp-validation-code';
import { WhatsappCode } from '../models/whatsapp-verification';
import { environment } from '../../../../../environments/environment';
import { WhatsappRegister } from '../models/whatapp-register';
import {CountriesService} from "../../countries/services/countries.service";
import { locale } from 'src/environments/locale/locale';


@Injectable({
  providedIn: 'root',
})
export class WhatsappVerificationService {
  POLLID = locale.slice(-2).toLowerCase() === 'br' ? 151825 : 127253;
  
  TREBLE_KEY = 'ak_Opxy9H8pvCgYzrJUCuMZDv8m4ezbO2bNrw';

  endpointCode: string = '/api/rappi-authentication/login/whatsapp/create';

  endpointValidate: string = '/api/rappi-authentication/login/whatsapp/validate';

  endpointRester: string = '/rt-registration/web/storekeeper-requests';

  trebleEndpoint: string = `https://main.treble.ai/deployment/api/poll/${this.POLLID}`;

  constructor(private http: HttpClient, public countryService: CountriesService) { }

  sendWhatsappCode(data: object,locale: string) {
    return this.http.post<WhatsappCode>(this.countryService.getRappiUrl(locale) + `${this.endpointCode}`,data);
  }

  sendValidateWhatsappCode(query: object, locale: string) {
    return this.http.post<WhatsappValidationCode>(this.countryService.getRappiUrl(locale) + `${this.endpointValidate}`, query);
  }

  sendUserRegister(locale: string, data?: WhatsappRegister) {
    return this.http.post(this.countryService.getRappiUrl(locale) + `${this.endpointRester}`, data);
  }

  sendDownloadLink(data: object) {
    return this.http.post(this.trebleEndpoint, data, {
      headers: {
        'Authorization': this.TREBLE_KEY
      }
    });
  }
}
