import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationState } from '../../models/navigation-state';
import { NavigationItem } from '../../../../utils/strapi/models/blocks/navigation-item';

@Injectable({
  providedIn: 'root',
})
export class NavigationStateService {

  navigationState = new BehaviorSubject<NavigationState>({
    currentCategoryName: '',
    currentSelectedItem: undefined,
    siblings: [],
  });

  constructor() { }

  setState(currentCategoryName: string,
           currentSelectedItem: NavigationItem | null | undefined,
           siblings: NavigationItem[]) {
    this.navigationState.next({
      currentCategoryName,
      currentSelectedItem,
      siblings,
    });
  }
}
