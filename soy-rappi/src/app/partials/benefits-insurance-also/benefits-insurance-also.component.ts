import { Component, OnInit, Input } from '@angular/core';
import { BenefitsInsuranceAlso } from 'src/app/utils/strapi/models/blocks/benefits-insurance-also.interface';

@Component({
  selector: 'app-benefits-insurance-also',
  templateUrl: './benefits-insurance-also.component.html',
  styleUrls: ['./benefits-insurance-also.component.scss']
})
export class BenefitsInsuranceAlsoComponent implements OnInit {

  @Input() data!: BenefitsInsuranceAlso;

  constructor() { }

  ngOnInit(): void {
  }

}
