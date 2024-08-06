import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { Question, QuestionsFaqs } from '../../models/blocks/question.interface';

export interface CategoriesFilters extends StrapiBaseModel {
  category: string;
  questions: Question[];
  code: string;
}

export interface CategoriesFiltersNew extends StrapiBaseModel {
  category: string;
  questions: QuestionsFaqs[];
  code: string;
}



export interface CategoriesFaqs extends StrapiBaseModel {
  name: string;
  questions: QuestionsFaqs[];
  activeCategory: boolean;
  questionsfaqs: any[];

  question: string;
  text: string;
  answer: string;
  active: boolean;
  category: CategoriesFiltersNew;
  description: string;
  id: number;
}

export interface Answer extends StrapiBaseModel {
  id: number;
  answer: string;
  question: string;
  text: string;
}

