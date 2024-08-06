import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first, catchError } from 'rxjs/operators';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { ServerSideRenderingService } from '../../server-side-rendering/services/server-side-rendering.service';

@Injectable({
  providedIn: 'root',
})
export class AppRecaptchaV3Service {
  timer: number | undefined | any = undefined;

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private ssrService: ServerSideRenderingService,
  ) { }

  public getToken(action: string): Observable<string | null> {
    return this.recaptchaV3Service.execute(action)
      .pipe(
        first(),
        catchError(() => {
          return of(null);
        }),
      );
  }

  public setBadgeVisibility(visible: boolean, delayMs?: number): void {
    if (this.ssrService.onServer())
      return;
    clearTimeout(this.timer);
    const delay = delayMs ? delayMs * 1000 : 600;
    this.timer = setTimeout(() => {
      let elements = this.ssrService.getDocument().getElementsByClassName('grecaptcha-badge');
      if (elements && elements.length) {
        (elements.item(0) as HTMLElement).style.visibility = visible ? 'visible' : 'hidden';
      }
    }, delay);
  }
}
