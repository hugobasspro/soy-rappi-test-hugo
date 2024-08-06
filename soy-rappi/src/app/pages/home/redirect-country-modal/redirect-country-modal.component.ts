import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { COUNTRIES } from './countries';
import { getTimezone } from 'countries-and-timezones';
import {ServerSideRenderingService} from '../../../utils/server-side-rendering/services/server-side-rendering.service';

@Component({
  selector: 'app-redirect-country-modal',
  templateUrl: './redirect-country-modal.component.html',
  styleUrls: ['./redirect-country-modal.component.scss'],
})
export class RedirectCountryModalComponent implements OnInit, OnChanges {
  public countries = COUNTRIES;
  public showModal: boolean = false;
  @Input()
  public isLoaded: boolean;
  //window.location.href
  private address: string = this.ssrService.getDocument().location.href;
  private domainPage: string = '';

  constructor(
    private ssrService: ServerSideRenderingService,
  ) {
    this.isLoaded = false;
    this.checkUrlLocation();
    this.getCountryUser();
  }

  ngOnInit() {}

  checkUrlLocation() {
    let dotComPosition = this.address.search('.com');
    let shortUrl = this.address.slice(dotComPosition + 5);
    this.domainPage = shortUrl.slice(0, 2).toUpperCase();
  }

  getCountryUser(): void {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezone = getTimezone(timeZone);
    const countryCode = timezone?.countries[0];

    if (countryCode !== this.domainPage && this.isLoaded) {
      this.showModal = true;
      this.ssrService.getDocument().body.style.overflow = 'hidden';
    }
  }

  redirectCountry(link: string): void {
    this.ssrService.getDocument().location.href = link;
  }

  closeRedirectModal(): void {
    this.showModal = false;
    this.ssrService.getDocument().body.style.overflow = 'auto';
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getCountryUser();
  }
}
