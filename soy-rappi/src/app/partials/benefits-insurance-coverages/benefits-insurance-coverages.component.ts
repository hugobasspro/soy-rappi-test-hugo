import { Component, OnInit, Input } from '@angular/core';
import { BenefitsInsuranceCoverages } from 'src/app/utils/strapi/models/blocks/benefits-insurance-coverages.interface';

@Component({
  selector: 'app-benefits-insurance-coverages',
  templateUrl: './benefits-insurance-coverages.component.html',
  styleUrls: ['./benefits-insurance-coverages.component.scss']
})
export class BenefitsInsuranceCoveragesComponent implements OnInit {

  @Input() data!: BenefitsInsuranceCoverages;

  constructor() { }

  ngOnInit(): void {
  }

}
