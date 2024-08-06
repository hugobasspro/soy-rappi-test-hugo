import { Component, Input, OnInit } from '@angular/core';
import { BenefitUse } from 'src/app/utils/strapi/models/blocks/benefit-use.interface';

@Component({
  selector: 'app-benefit-use',
  templateUrl: './benefit-use.component.html',
  styleUrls: ['./benefit-use.component.scss'],
})
export class BenefitUseComponent implements OnInit {

  @Input() data!: BenefitUse;

  constructor() {}

  ngOnInit(): void {}
}
