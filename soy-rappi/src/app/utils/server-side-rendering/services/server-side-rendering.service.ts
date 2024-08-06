import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer, DOCUMENT } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class ServerSideRenderingService {

  constructor(
    @Inject(PLATFORM_ID) private platformId:  InjectionToken<Object>,
    @Inject(DOCUMENT) private document: Document,
    private transferState: TransferState,
  ) { }

  onServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  onClient(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getDocument(): Document {
    return this.document;
  }

  setState<Type>(key: string, value: Type): void {
    if (this.onServer()) {
      const sKey = makeStateKey<Type>(key);
      this.transferState.set(sKey, value);
    }
  }

  getState<Type>(key: string, defaultValue: Type, clean?: boolean): Type {
    const sKey = makeStateKey<Type>(key);
    if (this.onClient() && this.transferState.hasKey(sKey)) {
      const val = this.transferState.get(sKey, defaultValue);
      if (clean) {
        this.transferState.remove(sKey);
      }
      return val;
    } else {
      return defaultValue;
    }
  }
}
