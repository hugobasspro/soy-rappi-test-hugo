import { Component, Input } from '@angular/core';
import { BenefitsInsuranceFaq } from 'src/app/utils/strapi/models/blocks/benefits-insurance-faq.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-insurance-faq',
  templateUrl: './benefits-insurance-faq.component.html',
  styleUrls: ['./benefits-insurance-faq.component.scss']
})
export class BenefitsInsuranceFaqComponent {

  @Input() data!: BenefitsInsuranceFaq;

  constructor(public uploadService: UploadService) { }

  toggleAnswer(index: number): void {
    this.data.faq[index].active = !this.data.faq[index].active;
  }

}
