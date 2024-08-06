import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadContentService {
  contentLoaded: boolean = false;
  footerLoaded: boolean = false;
  headerLoaded: boolean = false;
  showContent: boolean = false;

  constructor() {}

  checkContentReady() {
    this.showContent =
      this.contentLoaded || (this.footerLoaded && this.headerLoaded);
  }

  contentReady() {
    this.contentLoaded = true;
    this.checkContentReady();
  }

  footerReady() {
    this.footerLoaded = true;
    this.checkContentReady();
  }

  headerReady() {
    this.headerLoaded = true;
    this.checkContentReady();
  }
}
