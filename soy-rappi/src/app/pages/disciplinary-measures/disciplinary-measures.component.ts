import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { DisciplinaryMeasuresPage }
  from 'src/app/utils/strapi/disciplinary-measures/models/disciplinary-measures.interface';
import { DisciplinaryMeasuresService }
  from 'src/app/utils/strapi/disciplinary-measures/services/disciplinary-measures.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';

@Component({
  selector: 'app-disciplinary-measures',
  templateUrl: './disciplinary-measures.component.html',
  styleUrls: ['./disciplinary-measures.component.scss'],
})
export class DisciplinaryMeasuresComponent implements OnInit, OnDestroy {

  disciplinaryData: DisciplinaryMeasuresPage | undefined = this.ssrService.getState<
  DisciplinaryMeasuresPage | undefined>('DisciplinaryMeasuresPage', undefined);

  private _subscription: Subscription = new Subscription();

  constructor(
    private ssrService: ServerSideRenderingService,
    private disciplinaryMeasuresService: DisciplinaryMeasuresService,
    public uploadService: UploadService,
    private seoService: SeoInformationService,
  ) { }

  ngOnInit(): void {
    this.setMetaData();
    this._subscription.add(
      this.disciplinaryMeasuresService.getDisciplinaryMeasuresPageData().subscribe(res => {
        this.disciplinaryData = (res.data) ? res.data : undefined;
        this.ssrService.setState<DisciplinaryMeasuresPage | undefined>
        ('DisciplinaryMeasuresPage', this.disciplinaryData);
        this.setMetaData();
      }),
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.disciplinaryData) {
      this.seoService.setSEOInformation(this.disciplinaryData.seoInformation);
    }
  }
}
