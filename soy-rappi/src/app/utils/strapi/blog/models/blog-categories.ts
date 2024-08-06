import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { Categories } from '../../models/blocks/categories.interface';
import { CategoriesFilters } from './categories-filters';

export interface BlogEntry extends StrapiBaseModel {
  title: string;
  categories: Categories;
  typeCategory: CategoriesFilters;
  slug: string;
}
