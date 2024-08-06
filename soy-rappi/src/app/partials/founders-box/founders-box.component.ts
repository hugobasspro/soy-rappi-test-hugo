import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-founders-box',
  templateUrl: './founders-box.component.html',
  styleUrls: ['./founders-box.component.scss'],
})
export class FoundersBoxComponent {

  @Input() name: string = '';

  @Input() role: string = '';

  @Input() image: string = '';

  constructor() { }
}
