import { Categories } from './categories.interface';

export interface FaqsBlock {
  searchLabel: string;
  categoryQuestions: Categories[];
}


export interface FaqsNewBlock {
  answers: [];
  category_faqs: []
  questions_faqs: []
  searchButton: string;
  searchLabel: string;
}
