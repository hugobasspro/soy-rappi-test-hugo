import { Component, Input } from '@angular/core';
import { LoadContentService } from 'src/app/utils/load-content/load-content.service';
import { Footer } from 'src/app/utils/strapi/footer/models/footer.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() data: Footer | undefined;

  constructor(
    public uploadService: UploadService,
    public _loadContentService: LoadContentService
  ) {
    this._loadContentService.showContent;
  }
}
