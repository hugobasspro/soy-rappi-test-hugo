import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-capture-details',
  templateUrl: './preview-capture-details.component.html',
  styleUrls: ['./preview-capture-details.component.scss'],
})
export class PreviewCaptureDetailsComponent {

  @Input() image: string = '';

  @Input() description: string = '';

  constructor() { }

}
