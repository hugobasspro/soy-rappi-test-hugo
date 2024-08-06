import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderPage } from 'src/app/utils/strapi/header/models/header.interface';
import { HeaderService } from 'src/app/utils/strapi/header/services/header.service';
import { ServerSideRenderingService } from '../../utils/server-side-rendering/services/server-side-rendering.service';
import { MenuItem } from '../../utils/strapi/models/blocks/menu-item';
import { NavigationItem } from '../../utils/strapi/models/blocks/navigation-item';
import { NavigationStateService } from '../partials-utils/services/navigation-state/navigation-state.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { WhatYouHaveService } from '../../utils/strapi/what-you-have-to-know/services/what-you-have-to-know.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { LoadContentService } from 'src/app/utils/load-content/load-content.service';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('toggleButton') toggleButton!: ElementRef;

  isOpen = true;

  subMenuOpened = false;

  headerPageData: HeaderPage | undefined = this.ssrService.getState<
    HeaderPage | undefined
  >('menu-items', undefined);

  whatYouHaveToKnowFormUrl: string = this.ssrService.getState<string>(
    'haveToKnow-form-url',
    ''
  );

  private _subscription: Subscription = new Subscription();

  private _toggledPrincipalItem: MenuItem | undefined;
  isLoaded: boolean;

  urlform: string = '';

  constructor(
    public headerService: HeaderService,
    public uploadService: UploadService,
    private ssrService: ServerSideRenderingService,
    private navStateService: NavigationStateService,
    private whatYouHaveToKnowService: WhatYouHaveService,
    private location: Location,
    private router: Router,
    public _loadContentService: LoadContentService,
    public sharedFunctionsService: SharedFunctionsService
  ) {
    this.isLoaded = false;
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: number): void {
    const clickedInside =
      this.toggleButton?.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.headerPageData?.items.forEach((element) => {
        element.isOpen = false;
      });
    }
  }

  ngOnInit(): void {
    this.setCurrentNavigationState();
    this._subscription.add(
      this.headerService.getHeaderPageData().subscribe((res) => {
        if (res.data) {
          this.headerPageData = res.data;
          // Remove invalid items, even singleItem must have one item
          this.headerPageData.items = this.headerPageData.items.filter(
            (r) => r.items.length
          );
          this.headerPageData?.items.forEach((element, index: number) => {
            element.isOpen = false;
          });
          this.ssrService.setState<HeaderPage | undefined>(
            'menu-items',
            this.headerPageData
          );
          this.setCurrentNavigationState();
          this._loadContentService.headerReady();
          this.isLoaded = true;
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this._subscription.add(
      this.whatYouHaveToKnowService
        .getWhatYouHaveToKnowData()
        .subscribe((res) => {
          if (res.data) {
            this.whatYouHaveToKnowFormUrl = `/${res.data.slug}#${
              res.data.form?.urlFragment || 'register'
            }`;
            this.ssrService.setState<string>(
              'haveToKnow-form-url',
              this.whatYouHaveToKnowFormUrl
            );
          }
        })
    );
    this.getUrl();
  }

  setCurrentNavigationState() {
    if (!this.headerPageData?.items?.length) return;

    const currentPath = this.location.path(false);
    for (let item of this.headerPageData.items) {
      if (item.singleItem || !item.items?.length) continue;
      for (let navItem of item.items) {
        if (navItem.externalLink || !navItem.link?.slug) continue;
        if (`/${navItem.link.slug}` === currentPath) {
          this._toggledPrincipalItem = item;
          this.navStateService.setState(item.label, navItem, item.items);
          return;
        }
      }
    }
  }

  navItemClicked(principal: MenuItem) {
    this._toggledPrincipalItem = principal;
    this.subMenuOpened = principal.singleItem ? false : !this.subMenuOpened;
  }

  isNavItemActive(principal: MenuItem) {
    return this._toggledPrincipalItem === principal;
  }

  navClickSub(navItem: NavigationItem) {
    this.subMenuOpened = false;
    if (this._toggledPrincipalItem && !this._toggledPrincipalItem.singleItem) {
      this.navStateService.setState(
        this._toggledPrincipalItem.label,
        navItem,
        this._toggledPrincipalItem?.items || []
      );
      this.headerPageData?.items.forEach((element) => {
        element.isOpen = false;
      });
    }
  }

  childrenOneColumn(items: NavigationItem[]) {
    return items.length <= 3;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  clickMenuActions(url: string | undefined | null): void {
    if (!url || this.ssrService.onServer()) {
      return;
    }

    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      const currentPath = this.location.path(true);
      if (currentPath === url) {
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigateByUrl(url).then();
          });
      } else {
        this.router.navigateByUrl(url).then();
      }
    }
  }

  navClick(i: number) {
    this.headerPageData?.items.forEach((element) => {
      element.isOpen = false;
    });
    this.headerPageData?.items.forEach((element, index: number) => {
      if (i == index) {
        element.isOpen = !element?.isOpen;
      } else {
        element.isOpen = false;
      }
    });
  }

  getUrl() {
    this.urlform = '/#formRegister';
  }
}
