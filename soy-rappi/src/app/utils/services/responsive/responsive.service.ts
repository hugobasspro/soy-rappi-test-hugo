import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Displays } from 'src/app/models/enums';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {

  public mediaBreakpoint$ = new BehaviorSubject<string[]>([]);

  public display: string[] = [];

  private resizeSubject: Subject<Window>;

  constructor(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID) private platformId: any, private eventManager: EventManager) {
    this.resizeSubject = new Subject();
    this.eventManager.addGlobalEventListener(
      'window',
      'resize',
      this.onResize.bind(this),
    );

    if (this.onClient()) {
      this.processCurrentWindowSize();
    }
  }

  get onResize$(): Observable<Window> {
    return this.resizeSubject.asObservable();
  }

  public validateDisplay(display: string[], target: Displays): boolean {
    return display.some((value: string): boolean => value === target);
  }

  private onClient(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  private onResize() {
    this.processCurrentWindowSize();
  }

  private processCurrentWindowSize() {
    if (window.innerWidth < 375) {
      this.display = [Displays.MOBILE, Displays.MOBILE_SHORT];
    }
    if (window.innerWidth >= 375) {
      this.display = [Displays.MOBILE, Displays.MOBILE_MEDIUM];
    }
    if (window.innerWidth >= 425) {
      this.display = [Displays.MOBILE, Displays.MOBILE_LARGE];
    }
    if (window.innerWidth >= 768) {
      this.display = [Displays.TABLET];
    }
    if (window.innerWidth >= 1024) {
      this.display = [Displays.DESKTOP, Displays.DESKTOP_SHORT];
    }
    if (window.innerWidth >= 1280) {
      this.display = [Displays.DESKTOP, Displays.DESKTOP_MEDIUM];
    }
    if (window.innerWidth >= 1366) {
      this.display = [Displays.DESKTOP, Displays.DESKTOP_LARGE];
    }
    if (window.innerWidth >= 1440) {
      this.display = [Displays.DESKTOP, Displays.DESKTOP_LARGE, Displays.DESKTOP_EXTRA_LARGE];
    }
    if (window.innerWidth >= 2560) {
      this.display = [Displays.DESKTOP, Displays.DESKTOP_LARGE, Displays.DESKTOP_EXTRA_EXTRA_LARGE];
    }
    this.mediaBreakpoint$.next(this.display);
  }
}
