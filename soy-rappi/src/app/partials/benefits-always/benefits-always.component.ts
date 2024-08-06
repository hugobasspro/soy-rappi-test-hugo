import { Component, Input, OnInit } from '@angular/core';
import { BenefitsAlways } from 'src/app/utils/strapi/models/blocks/benefits-always.interface';

@Component({
  selector: 'app-benefits-always',
  templateUrl: './benefits-always.component.html',
  styleUrls: ['./benefits-always.component.scss']
})
export class BenefitsAlwaysComponent implements OnInit {

  @Input() data!: BenefitsAlways

  constructor() { }

  ngOnInit(): void {
  }

}
