import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecaptchaV3Module } from 'ng-recaptcha';
import { SanitizerPipe } from './pipes/sanitizer/sanitizer.pipe';
import { Meta } from '@angular/platform-browser';
import { DynamicPageDirective } from './directives/dynamic-page-directive/dynamic-page.directive';
import { RichTextDirective } from './directives/rich-text/rich-text.directive';

@NgModule({
  declarations: [
    SanitizerPipe,
    DynamicPageDirective,
    RichTextDirective,
  ],
  imports: [
    CommonModule,
    RecaptchaV3Module,
  ],
  providers: [Meta],
  exports: [SanitizerPipe,
            DynamicPageDirective,
            RichTextDirective,
  ],
})
export class UtilsModule { }
