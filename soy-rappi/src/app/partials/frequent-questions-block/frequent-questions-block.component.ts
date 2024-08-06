import { Component, Input } from '@angular/core';
import { FrequentQuestionsBlock } from 'src/app/utils/strapi/models/blocks/frequent-questions.interface';
import { QuestionItem } from 'src/app/utils/strapi/models/partials/question-item.interface';

@Component({
  selector: 'app-frequent-questions-block',
  templateUrl: './frequent-questions-block.component.html',
  styleUrls: ['./frequent-questions-block.component.scss'],
})
export class FrequentQuestionsBlockComponent {

  @Input() data: FrequentQuestionsBlock | undefined;

  @Input() questions: QuestionItem[] = [];

  @Input() title : undefined | string = '';

  constructor() { }

  isTitle(title: string | undefined) {
    if (title) {
      return true;
    }
    return false;
  }

  isQuestions(items: QuestionItem[]) {
    if (items.length) {
      return true;
    }
    return false;
  }

}
