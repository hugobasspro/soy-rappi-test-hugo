import { Component, Input, OnInit } from '@angular/core';
import { BenefitsInsuranceIntro } from 'src/app/utils/strapi/models/blocks/benefits-insurance-intro.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-insurance-intro',
  templateUrl: './benefits-insurance-intro.component.html',
  styleUrls: ['./benefits-insurance-intro.component.scss']
})
export class BenefitsInsuranceIntroComponent implements OnInit {

  @Input() data!: BenefitsInsuranceIntro;

  constructor(public uploadService: UploadService) { }

  ngOnInit(): void {
  }

}
