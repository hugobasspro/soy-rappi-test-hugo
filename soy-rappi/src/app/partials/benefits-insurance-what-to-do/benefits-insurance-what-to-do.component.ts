import { Component, Input, OnInit } from '@angular/core';
import { BenefitsInsuranceWhatToDo } from 'src/app/utils/strapi/models/blocks/benefits-insurance-what-to-do.interface';

@Component({
  selector: 'app-benefits-insurance-what-to-do',
  templateUrl: './benefits-insurance-what-to-do.component.html',
  styleUrls: ['./benefits-insurance-what-to-do.component.scss']
})
export class BenefitsInsuranceWhatToDoComponent implements OnInit {

  @Input() data!: BenefitsInsuranceWhatToDo

  constructor() { }

  ngOnInit(): void {
  }

}
