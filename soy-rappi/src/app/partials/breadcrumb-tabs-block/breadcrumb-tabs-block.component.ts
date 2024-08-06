import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStateService } from '../partials-utils/services/navigation-state/navigation-state.service';
import { Subscription } from 'rxjs';
import { NavigationItem } from '../../utils/strapi/models/blocks/navigation-item';

@Component({
  selector: 'app-breadcrumb-tabs-block',
  templateUrl: './breadcrumb-tabs-block.component.html',
  styleUrls: ['./breadcrumb-tabs-block.component.scss'],
})
export class BreadcrumbTabsBlockComponent implements OnInit, OnDestroy {

  breadcrumb: string[] = [];

  tabs: NavigationItem[] = [];

  currentNavigationItem: NavigationItem | undefined | null;

  currentCategoryName: string = '';

  private _subscription: Subscription = new Subscription();

  constructor(private navStateService: NavigationStateService) { }

  ngOnInit(): void {
    this._subscription = this.navStateService.navigationState.subscribe(value => {
      this.currentCategoryName = value.currentCategoryName;
      this.breadcrumb = value.currentSelectedItem ?
        ['Inicio ', `${this.currentCategoryName} `, value.currentSelectedItem.label] :
        [];
      this.tabs = value.siblings;
      this.currentNavigationItem = value.currentSelectedItem;
    });
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

}
