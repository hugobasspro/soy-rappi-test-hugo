import { Categories } from './categories.interface';

export interface RecentEntries {
  title: string;
  ctaLabel: string;
  ctaUrl: string;
  mostCategories: Categories[];
}
