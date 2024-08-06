import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { RappiMetricsPage } from 'src/app/utils/strapi/rappi-metrics/models/rappi-metrics.interface';
import { RappiMetricsService } from 'src/app/utils/strapi/rappi-metrics/services/rappi-metrics.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-rappi-metrics',
  templateUrl: './rappi-metrics.component.html',
  styleUrls: ['./rappi-metrics.component.scss'],
})
export class RappiMetricsComponent implements OnInit, OnDestroy {

  rappiMatricsPageData: RappiMetricsPage | undefined =
  this.ssrService.getState<RappiMetricsPage | undefined>('RappiMetricsPage', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    private ssrService: ServerSideRenderingService,
    public uploadService: UploadService,
    private rappiMetricsService: RappiMetricsService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.rappiMetricsService.getRappiMetricsPageData().subscribe(res => {
        this.rappiMatricsPageData = (res.data) ? res.data : undefined;
        this.ssrService.setState<RappiMetricsPage | undefined>('RappiMetricsPage', this.rappiMatricsPageData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.rappiMatricsPageData) {
      this.seoService.setSEOInformation(this.rappiMatricsPageData.seoInformation);
    }
  }
}
