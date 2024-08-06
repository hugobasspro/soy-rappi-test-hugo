import { Component, Input, OnInit } from '@angular/core';
import { BenefitsInsuranceInformFamily } from 'src/app/utils/strapi/models/blocks/benefit-insurance-inform-family.interface';

@Component({
  selector: 'app-benefits-insurance-inform-family',
  templateUrl: './benefits-insurance-inform-family.component.html',
  styleUrls: ['./benefits-insurance-inform-family.component.scss'],
})
export class BenefitsInsuranceInformFamilyComponent implements OnInit {

  @Input() data!: BenefitsInsuranceInformFamily;

  constructor() {}

  ngOnInit(): void {}
}
