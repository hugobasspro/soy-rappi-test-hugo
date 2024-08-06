import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor() {
    this.checkUrlLocation();
  }
  address: string = window.location.href;
  //   address: string = 'www.something.com.mx';
  domainPage: string = '';

  checkUrlLocation() {
    let dotComPosition = this.address.search('.com');
    let shortUrl = this.address.slice(dotComPosition + 5);
    this.domainPage = shortUrl.slice(0, 2).toUpperCase();
  }
}
