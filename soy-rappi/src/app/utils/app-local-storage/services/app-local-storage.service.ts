import { Injectable } from '@angular/core';
import { ServerSideRenderingService } from '../../server-side-rendering/services/server-side-rendering.service';

@Injectable({
  providedIn: 'root',
})
export class AppLocalStorageService {

  constructor(private ssrService: ServerSideRenderingService) { }

  public getItem(key: string) : string | null {
    return this.ssrService.onClient() ? localStorage.getItem(key) : null;
  }

  public setItem(key: string, value: string) : void {
    if (this.ssrService.onClient()) {
      localStorage.setItem(key, value);
    }
  }

  public removeItem(key: string) : void {
    if (this.ssrService.onClient()) {
      localStorage.removeItem(key);
    }
  }
}
