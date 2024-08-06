import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicPage]',
})
export class DynamicPageDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
