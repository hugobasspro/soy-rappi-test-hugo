import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  PhoneRegistrationDialogComponent,
} from 'src/app/partials/phone-registration-dialog/phone-registration-dialog.component';
import { ThankYou } from 'src/app/utils/strapi/thank-you/models/thank-you';
import { ThankYouService } from 'src/app/utils/strapi/thank-you/services/thank-you.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent implements OnInit {

  thankyouData: ThankYou | undefined;

  modalRef?: BsModalRef;

  constructor(private thankYouService: ThankYouService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.thankYouService.getEntries().subscribe((res) => {
      this.thankyouData = res.data || undefined;
      this.thankYouService.modalHide = this.modalService.show(
        PhoneRegistrationDialogComponent,
        Object.assign({}, { class: 'modal-dialog-centered modal-registration' }),
      );
      this.thankYouService.modalHide.content.texts = this.thankyouData;
    });
  }

  closeModal() {
    this.modalRef?.hide();
  }

}
