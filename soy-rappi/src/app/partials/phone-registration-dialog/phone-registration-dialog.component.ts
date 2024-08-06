import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { ThankYou } from 'src/app/utils/strapi/thank-you/models/thank-you';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { Router } from '@angular/router';
import { ThankYouService } from 'src/app/utils/strapi/thank-you/services/thank-you.service';
@Component({
  selector: 'app-phone-registration-dialog',
  templateUrl: './phone-registration-dialog.component.html',
  styleUrls: ['./phone-registration-dialog.component.scss'],
})
export class PhoneRegistrationDialogComponent {

  @Input() texts: ThankYou | undefined;

  @Output() modalClose: EventEmitter<any> = new EventEmitter();

  constructor(public uploadService : UploadService,
              private router : Router,
              private thankYouService: ThankYouService,
              private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickout(event: PointerEvent ) {
    if (this.eRef.nativeElement.contains(event.target)) {} else {
      this.thankYouService.modalHide.hide();
      this.router.navigate(['/']);
    }
  }

  close() {
    this.thankYouService.modalHide.hide();
    this.router.navigate(['/']);
  }

}
