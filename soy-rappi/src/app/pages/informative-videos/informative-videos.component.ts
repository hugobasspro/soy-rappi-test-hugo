import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { InformativeVideos } from 'src/app/utils/strapi/informative-videos/models/informative-videos';
import { InformativeVideosService } from 'src/app/utils/strapi/informative-videos/services/informative-videos.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-informative-videos',
  templateUrl: './informative-videos.component.html',
  styleUrls: ['./informative-videos.component.scss'],
})
export class InformativeVideosComponent implements OnInit, OnDestroy {

  informative: InformativeVideos | undefined = this.ssrService.getState<InformativeVideos | undefined>(
    'InformativeVideos', undefined);

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private informativeVideosService: InformativeVideosService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.informativeVideosService.getInformativeVideosPageData().subscribe((res) => {
        this.informative = (res.data) ? res.data : undefined;
        this.ssrService.setState<InformativeVideos | undefined>('InformativeVideos',this.informative);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.informative) {
      this.seoService.setSEOInformation(this.informative.seoInformation);
    }
  }
}
