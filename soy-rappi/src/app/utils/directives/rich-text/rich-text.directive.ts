import { Directive, ElementRef, Input, OnChanges, Renderer2, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appRichText]',
})
export class RichTextDirective implements OnChanges {

  @Input() appRichText: undefined | string = '';

  constructor(private sanitizer: DomSanitizer,
              private el: ElementRef,
              private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.appRichText?.currentValue) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerHTML',
        this.sanitizer.sanitize(
          SecurityContext.HTML,
          this.sanitizer.bypassSecurityTrustHtml(changes.appRichText.currentValue),
        ),
      );
    }
  }

}
