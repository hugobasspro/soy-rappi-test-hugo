import { Injectable } from '@angular/core';
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { ServerSideRenderingService } from '../../server-side-rendering/services/server-side-rendering.service';
import { GoogleTagEvent } from '../models/google-tag-event';

@Injectable({
  providedIn: 'root',
})
export class TagManagerService {

  constructor(
    private ssrService: ServerSideRenderingService,
    private gtmService: GoogleTagManagerService) { }

  private canTag(): boolean {
    return !!this.gtmService.config.id && this.gtmService.config.id !== 'GTM-XXXXXX' && this.ssrService.onClient();
  }

  addGtmToDom(): void {
    if (!this.canTag()) {
      return;
    }

    this.gtmService.addGtmToDom().then(() => { }).catch(() => { });
  }

  tag(event: GoogleTagEvent): void {
    if (!this.canTag()) {
      return;
    }
    this.gtmService.pushTag(event).then(() => { }).catch(() => { });
  }
}
