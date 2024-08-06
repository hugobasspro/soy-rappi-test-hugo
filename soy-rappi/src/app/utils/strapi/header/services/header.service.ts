import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderPage } from '../models/header.interface';
import { StrapiService } from '../../base/services/strapi.service';
import { HttpClient } from '@angular/common/http';
import { StrapiQuery } from '../../base/models/strapi-query';
import { StrapiHttpResponse } from '../../base/models/strapi-http-response';
import { NavigationItem } from '../../models/blocks/navigation-item';
import { MenuItem } from '../../models/blocks/menu-item';

@Injectable({
  providedIn: 'root',
})
export class HeaderService extends StrapiService {
  constructor(protected http: HttpClient) {
    super(http, 'header');
  }

  getHeaderPageData(query?: StrapiQuery): Observable<StrapiHttpResponse<HeaderPage>> {
    return this._getEntries<HeaderPage>(query);
  }

  getLinkFromSingleMenuItem(menuItem: MenuItem): string {
    return menuItem.items.length ? this.getLinkFromNavItem(menuItem.items[0]) : '';
  }

  getLinkFromNavItem(navItem: NavigationItem): string {
    return navItem.externalLink || navItem.link?.slug || '';
  }

  isSingleMenuItemExternal(menuItem: MenuItem): boolean {
    return menuItem.singleItem && menuItem.items.length ? this.isNavItemExternal(menuItem.items[0]) : false;
  }

  isNavItemExternal(navItem: NavigationItem): boolean {
    return !!navItem.externalLink;
  }

}
