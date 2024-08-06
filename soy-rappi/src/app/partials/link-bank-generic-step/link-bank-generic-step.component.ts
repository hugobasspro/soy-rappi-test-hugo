import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-bank-generic-step',
  templateUrl: './link-bank-generic-step.component.html',
  styleUrls: ['./link-bank-generic-step.component.scss'],
})
export class LinkBankGenericStepComponent  {

  @Input() textContent: any[] = [];

  @Input() media?: any;

  @Input() currentStep: number = 0;

  constructor() { }

}
