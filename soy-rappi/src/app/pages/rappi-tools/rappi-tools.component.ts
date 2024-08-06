import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { RappiTools } from 'src/app/utils/strapi/rappi-tools/models/rappi-tools';
import { RappiToolsService } from 'src/app/utils/strapi/rappi-tools/services/rappi-tools.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-rappi-tools',
  templateUrl: './rappi-tools.component.html',
  styleUrls: ['./rappi-tools.component.scss'],
})
export class RappiToolsComponent implements OnInit, OnDestroy {

  rappi: RappiTools | undefined = this.ssrService.getState<RappiTools | undefined>('RappiTools', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private rappiToolsService:RappiToolsService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.rappiToolsService.getRappiToolsPageData().subscribe((res) => {
        this.rappi = (res.data) ? res.data : undefined;
        this.ssrService.setState<RappiTools | undefined>('RappiTools', this.rappi);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.rappi) {
      this.seoService.setSEOInformation(this.rappi.seoInformation);
    }
  }
}
