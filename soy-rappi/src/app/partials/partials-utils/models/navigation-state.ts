import { NavigationItem } from '../../../utils/strapi/models/blocks/navigation-item';

export interface NavigationState {
  currentCategoryName: string;
  currentSelectedItem: NavigationItem | undefined | null;
  siblings: NavigationItem[];
}
