import { Component, Input, OnInit } from '@angular/core';
import { ContestTerms } from 'src/app/utils/strapi/contest/models/contest-terms';

@Component({
  selector: 'app-contest-terms-conditions',
  templateUrl: './contest-terms-conditions.component.html',
  styleUrls: ['./contest-terms-conditions.component.scss']
})
export class ContestTermsConditionsComponent implements OnInit {

  @Input() data: ContestTerms | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
