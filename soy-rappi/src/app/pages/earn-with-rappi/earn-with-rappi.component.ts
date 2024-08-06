import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { EarnWithRappi } from 'src/app/utils/strapi/earn-with-rappi/models/earn-with-rappi.interface';
import { EarnWithRappiService } from 'src/app/utils/strapi/earn-with-rappi/services/earn-with-rappi.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-earn-with-rappi',
  templateUrl: './earn-with-rappi.component.html',
  styleUrls: ['./earn-with-rappi.component.scss'],
})
export class EarnWithRappiComponent implements OnInit, OnDestroy {

  earnWithRappiData: EarnWithRappi | undefined = this.ssrService.getState<EarnWithRappi | undefined>(
    'EarnWithRappiPage', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    private earnWithRappiService: EarnWithRappiService,
    public uploadService: UploadService,
    private ssrService: ServerSideRenderingService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.earnWithRappiService.getEarnWithRappiData().subscribe(res => {
        this.earnWithRappiData = (res.data) ? res.data : undefined;
        this.ssrService.setState<EarnWithRappi | undefined>('earn-with-rappi', this.earnWithRappiData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.earnWithRappiData) {
      this.seoService.setSEOInformation(this.earnWithRappiData.seoInformation);
    }
  }
}
