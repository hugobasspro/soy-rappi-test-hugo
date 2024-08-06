import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, tap } from 'rxjs/operators';
import { Link, LinkReference } from 'src/app/utils/strapi/links/models/link';
import { PagesComponent } from '../../../pages.component';
import { LinksService } from '../../../../utils/strapi/links/services/links.service';

// Types
import { HomeComponent } from '../../../home/home.component';
import { AcceptingOrdersComponent } from '../../../accepting-orders/accepting-orders.component';
import { BagComponent } from '../../../bag/bag.component';
import {
  BankAccountAndCalendarComponent,
} from '../../../bank-account-and-calendar/bank-account-and-calendar.component';
import { BlogComponent } from '../../../blog/blog.component';
import { DisciplinaryMeasuresComponent } from '../../../disciplinary-measures/disciplinary-measures.component';
import { EarnWithRappiComponent } from '../../../earn-with-rappi/earn-with-rappi.component';
import { ExclusiveDiscountsComponent } from '../../../exclusive-discounts/exclusive-discounts.component';
import { FiveStarsOrdersComponent } from '../../../five-stars-orders/five-stars-orders.component';
import { HealthComponent } from '../../../health/health.component';
import { InformativeVideosComponent } from '../../../informative-videos/informative-videos.component';
import { MonotaxComponent } from '../../../monotax/monotax.component';
import { OrderTypesComponent } from '../../../order-types/order-types.component';
import { OurStoryComponent } from '../../../our-story/our-story.component';
import { RappiMetricsComponent } from '../../../rappi-metrics/rappi-metrics.component';
import { RappiToolsComponent } from '../../../rappi-tools/rappi-tools.component';
import { ReferencesComponent } from '../../../references/references.component';
import { ScheduleReservationComponent } from '../../../schedule-reservation/schedule-reservation.component';
import { ShoppingCardComponent } from '../../../shopping-card/shopping-card.component';
import { StatusComponent } from '../../../status/status.component';
import { TipsComponent } from '../../../tips/tips.component';
import { WhatYouHaveToKnowComponent } from '../../../what-you-have-to-know/what-you-have-to-know.component';
import { WhoWeAreComponent } from '../../../who-we-are/who-we-are.component';
import { RewardsComponent } from '../../../rewards/rewards.component';
import { EntryComponent } from 'src/app/pages/entry/entry.component';
import { ThankYouComponent } from 'src/app/pages/thank-you/thank-you.component';
import { Observable, of } from 'rxjs';
import { StrapiHttpResponse } from 'src/app/utils/strapi/base/models/strapi-http-response';


@Injectable({
  providedIn: 'root',
})
export class PageMappingService {

  public initialized: boolean = false;

  constructor(private router: Router,
              private linksService: LinksService) { }

  componentsViewMap(value: LinkReference) {
    switch (value) {
      case LinkReference.ACCEPTING_ORDERS_PAGE:
        return AcceptingOrdersComponent;
        break;

      case LinkReference.BAG_PAGE:
        return BagComponent;
        break;

      case LinkReference.BANK_ACCOUNT_CALENDAR_PAGE:
        return BankAccountAndCalendarComponent;
        break;

      case LinkReference.BLOG_PAGE:
        return BlogComponent;
        break;

      case LinkReference.DISCIPLINARY_PAGE:
        return DisciplinaryMeasuresComponent;
        break;

      case LinkReference.EARN_PAGE:
        return EarnWithRappiComponent;
        break;

      case LinkReference.EXCLUSIVE_DISCOUNTS_PAGE:
        return ExclusiveDiscountsComponent;
        break;

      case LinkReference.FIVE_STARS_PAGE:
        return FiveStarsOrdersComponent;
        break;

      case LinkReference.HEALTH_PAGE:
        return HealthComponent;
        break;

      case LinkReference.HOME_PAGE:
        return HomeComponent;
        break;

      case LinkReference.INFORMATIVE_VIDEOS_PAGE:
        return InformativeVideosComponent;
        break;

      case LinkReference.MONOTAX_PAGE:
        return MonotaxComponent;
        break;

      case LinkReference.ORDER_TYPES_PAGE:
        return OrderTypesComponent;
        break;

      case LinkReference.OUR_STORY_PAGE:
        return OurStoryComponent;
        break;

      case LinkReference.RAPPI_METRICS_PAGE:
        return RappiMetricsComponent;
        break;

      case LinkReference.RAPPI_TOOLS_PAGE:
        return RappiToolsComponent;
        break;

      case LinkReference.REFERENCES_PAGE:
        return ReferencesComponent;
        break;

      case LinkReference.SCHEDULE_RESERVATION_PAGE:
        return ScheduleReservationComponent;
        break;

      case LinkReference.SHOPPING_CARD_PAGE:
        return ShoppingCardComponent;
        break;

      case LinkReference.STATUS_PAGE:
        return StatusComponent;
        break;

      case LinkReference.TIPS_PAGE:
        return TipsComponent;
        break;

      case LinkReference.WHAT_HAVE_KNOW_PAGE:
        return WhatYouHaveToKnowComponent;
        break;

      case LinkReference.WHO_WE_ARE_PAGE:
        return WhoWeAreComponent;
        break;

      case LinkReference.DYNAMIC_PAGE:
        return EntryComponent;
        break;

      case LinkReference.REWARDS_PAGE:
        return RewardsComponent;
        break;

      case LinkReference.THANK_YOU_PAGE:
        return ThankYouComponent;
        break;

      default:
        return HomeComponent;
        break;
    }
  }

  reconfigureRouter(links: Link[]) {
    // Crear subject y emitir
    this.router.config[0].children = [
      {
        path: '',
        component: HomeComponent,
      },
    ];
    this.router.config[0].component = PagesComponent;
    this.router.config[0].loadChildren = undefined;

    const childrenRouters = links.map((item: Link) => {
      return {
        path: item.slug,
        component: this.componentsViewMap(item.reference) || undefined,
      };
    });

    this.router.config[0].children = this.router.config[0].children.concat(childrenRouters) || [];
    this.router.resetConfig(this.router.config);
  }

  getSiteLinks(start = 0, limit = 100, accumulatedData: Link[] = []) {
    /**
     * NOTE: Every route will be stacked/stored on accumulatedData variable.
     * If you're getting performance issues, need to change the implementation
     * Currently the FCP could be increased for each 100 (limit) routes requested.
     */
    return this.linksService.getEntries({ start, limit }).pipe(
      concatMap((res: StrapiHttpResponse<Link[]>): Observable<Link[]> => {
        this.initialized = true;
        if (res.err) {
          return of([]);
        }
        if (res.data) {
          res.data = res.data.map((r: Link) => {
            return {
              ...r,
              slug: r.slug.startsWith('/') ? r.slug.slice(1) : r.slug,
            };
          });
          accumulatedData = accumulatedData.concat(res.data);
          if (res.data.length < limit) {
            this.reconfigureRouter(accumulatedData);
            return of(accumulatedData);
          } else {
            return this.getSiteLinks(start + limit, limit, accumulatedData);
          }
        } else {
          return of(accumulatedData);
        }
      }),
    );
  }
}
