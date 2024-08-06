import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionItem } from 'src/app/utils/strapi/models/partials/question-item.interface';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss'],
})
export class QuestionItemComponent {

  @Input() data: QuestionItem | undefined;
  @Input() isActive: boolean = false;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  onClick() {
    this.isActive = !this.isActive;
  }
}
