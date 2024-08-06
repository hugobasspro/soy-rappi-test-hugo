import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { RewardsPage } from 'src/app/utils/strapi/rewards/models/rewards.interface';
import { RewaredsService } from 'src/app/utils/strapi/rewards/services/rewareds.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss'],
})
export class RewardsComponent implements OnInit, OnDestroy {

  rewaredsData: RewardsPage | undefined =
  this.ssrService.getState<RewardsPage | undefined>('RewardsPage', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    private ssrService: ServerSideRenderingService,
    private rewaredsService: RewaredsService,
    public uploadService: UploadService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.rewaredsService.getRewardsPageData().subscribe(res => {
        this.rewaredsData = (res.data) ? res.data : undefined;
        this.ssrService.setState<RewardsPage | undefined>
        ('RewardsPage', this.rewaredsData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.rewaredsData) {
      this.seoService.setSEOInformation(this.rewaredsData.seoInformation);
    }
  }
}
