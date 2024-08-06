import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../utils/strapi/models/blocks/navigation-item';
import { HeaderService } from '../../utils/strapi/header/services/header.service';
import { NavigationStateService } from '../partials-utils/services/navigation-state/navigation-state.service';

@Component({
  selector: 'app-content-tabs',
  templateUrl: './content-tabs.component.html',
  styleUrls: ['./content-tabs.component.scss'],
})
export class ContentTabsComponent {

  @Input() currentCategoryName: string = '';

  @Input() currentNavItem: NavigationItem | undefined | null;

  @Input() navItems: NavigationItem[] = [];

  constructor(public headerService: HeaderService,
              private navStateService: NavigationStateService) { }

  isItemEnabled(navItem: NavigationItem) {
    return this.currentNavItem && this.currentNavItem.label === navItem.label;
  }

  itemClicked(navItem: NavigationItem): void {
    this.navStateService.setState(this.currentCategoryName, navItem, this.navItems);
  }

  getInternalLink(navItem: NavigationItem): string {
    const url = this.headerService.getLinkFromNavItem(navItem);
    return (url && !url.startsWith('/')) ? `/${url}` : url;
  }
}
