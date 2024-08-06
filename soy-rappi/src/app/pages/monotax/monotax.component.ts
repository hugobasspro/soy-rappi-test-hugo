import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { MonotaxPage } from 'src/app/utils/strapi/monotax/models/monotax.interface';
import { MonotaxService } from 'src/app/utils/strapi/monotax/services/monotax.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-monotax',
  templateUrl: './monotax.component.html',
  styleUrls: ['./monotax.component.scss'],
})
export class MonotaxComponent implements OnInit, OnDestroy {

  monotaxData: MonotaxPage | undefined = this.ssrService.getState<MonotaxPage | undefined>(
    'Monotax', undefined);

  private subscription: Subscription = new Subscription();

  constructor(
    public uploadService: UploadService,
    private ssrService: ServerSideRenderingService,
    private monotaxService: MonotaxService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.monotaxService.getMonotaxPageData().subscribe((res) => {
        this.monotaxData = (res.data) ? res.data : undefined;
        this.ssrService.setState<MonotaxPage | undefined>('Monotax', this.monotaxData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.monotaxData) {
      this.seoService.setSEOInformation(this.monotaxData.seoInformation);
    }
  }
}
