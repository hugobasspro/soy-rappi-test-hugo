import { NovidadesCategoriesBlog } from './novidades-categories-blog.interface';

export interface NovidadesBlog {
  title: string;
  ctaLabel: string;
  ctaUrl: string;
  novidadesCategories: NovidadesCategoriesBlog[];
}
