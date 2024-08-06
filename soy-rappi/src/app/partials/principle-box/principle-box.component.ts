import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principle-box',
  templateUrl: './principle-box.component.html',
  styleUrls: ['./principle-box.component.scss'],
})
export class PrincipleBoxComponent {

  @Input() text: string = '';

  @Input() icon: string = '';

  @Input() index: number = 0;

  constructor() { }
}
