import { Component, Input } from '@angular/core';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {

  @Input() data: BlogEntry | undefined;

  constructor(private uploadService: UploadService) { }

  getImage(item: StrapiFile[] | []) {
    if (item.length) {
      return this.uploadService.makeUrl(item[0]);
    }
    return '';
  }

}
