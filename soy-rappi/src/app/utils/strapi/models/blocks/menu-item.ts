import { NavigationItem } from './navigation-item';

export interface MenuItem {
  label: string;
  items: NavigationItem[];
  singleItem: boolean;
  isOpen:boolean;
}
