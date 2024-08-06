import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { Health } from 'src/app/utils/strapi/health/models/health';
import { HealthService } from 'src/app/utils/strapi/health/services/health.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss'],
})
export class HealthComponent implements OnInit, OnDestroy {

  health: Health | undefined = this.ssrService.getState<Health | undefined>('Health', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private healthService: HealthService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.healthService.getHealthPageData().subscribe((res) => {
        this.health = (res.data) ? res.data : undefined;
        this.ssrService.setState<Health | undefined>('Health', this.health);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.health) {
      this.seoService.setSEOInformation(this.health.seoInformation);
    }
  }
}
