import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SharedFunctionsService {
  mapUrlIndex : number = 0;

  constructor() { }

  isExternalLink(link: string | undefined): boolean {
    let protocol: string = 'http';
    return link?.includes(protocol) ? true : false;
  }

  removeInitialSlash(link: string | undefined): string {
    return link?.startsWith('/') ? link.substring(1) : link || '';
  }
}
