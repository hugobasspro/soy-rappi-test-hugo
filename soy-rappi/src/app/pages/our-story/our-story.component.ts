import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OurStoryPage } from 'src/app/utils/strapi/our-story/models/our-story.interface';
import { OurStoryService } from 'src/app/utils/strapi/our-story/services/our-story.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.scss'],
})
export class OurStoryComponent implements OnInit, OnDestroy {

  ourStoryPageData: OurStoryPage | undefined = this.ssrService.getState<OurStoryPage | undefined>(
    'OurStoryPage', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    public uploadService: UploadService,
    private ourStoryService: OurStoryService,
    private ssrService: ServerSideRenderingService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.ourStoryService.getOurStoryPageData().subscribe(res => {
        this.ourStoryPageData = (res.data) ? res.data : undefined;
        this.ssrService.setState<OurStoryPage | undefined>('OurStoryPage',this.ourStoryPageData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.ourStoryPageData) {
      this.seoService.setSEOInformation(this.ourStoryPageData.seoInformation);
    }
  }

}
