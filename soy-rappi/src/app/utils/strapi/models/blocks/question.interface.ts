import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { CategoriesFilters, CategoriesFiltersNew } from '../../blog/models/categories-filters';

export interface Question extends StrapiBaseComponent {
    question: string;
    answer: string;
    active: boolean;
    category: CategoriesFilters;
    description: string;
}

export interface QuestionsFaqs extends StrapiBaseComponent {
    question: string;
    answer: string;
    active: boolean;
    category: CategoriesFiltersNew;
    description: string;
    id: number;
    categories: []
    questions: []
    text: string;
}
