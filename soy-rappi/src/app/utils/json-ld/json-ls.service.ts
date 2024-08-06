import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class JsonLDService {
  static scriptType: string = 'application/ld+json';

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  insertSchema(schema: string, className: string): void {
    let script: any;
    let shouldAppend: boolean = false;
    if (this._document.head.getElementsByClassName(className).length) {
      script = this._document.head.getElementsByTagName("script")[0];
    } else {
        script = this._document.createElement('script');
        shouldAppend = true;
    }
    script.setAttribute('class', className);
    script.type = JsonLDService.scriptType;
    script.text = schema;
    if (shouldAppend) {
      this._document.head.appendChild(script);
    }
  }

  removeSchema(className: string): void {
    let element: Element = this._document.head.getElementsByClassName(className)[0];
    this._document.head.removeChild(element)
  }
};

