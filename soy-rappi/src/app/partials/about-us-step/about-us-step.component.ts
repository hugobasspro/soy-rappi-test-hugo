import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { Button } from 'src/app/utils/strapi/models/partials/button.interface';


@Component({
  selector: 'app-about-us-step',
  templateUrl: './about-us-step.component.html',
  styleUrls: ['./about-us-step.component.scss'],
})
export class AboutUsStepComponent {

  @Input() title: string = '';

  @Input() description: string = '';

  @Input() image: string = '';

  @Input() imageToLeft?: boolean = false;

  @Input() button!: Button;

  constructor(public sharedFunctionsService: SharedFunctionsService) { }
}
