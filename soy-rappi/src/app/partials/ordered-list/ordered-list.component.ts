import { Component, Input } from '@angular/core';
import { OrderedList } from 'src/app/utils/strapi/models/blocks/ordered-list.interface';
import { UnderedList } from 'src/app/utils/strapi/models/blocks/undered-list.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-ordered-list',
  templateUrl: './ordered-list.component.html',
  styleUrls: ['./ordered-list.component.scss'],
})
export class OrderedListComponent {

  @Input() data: OrderedList[] = [];

  @Input() dataBlog: UnderedList | undefined;

  @Input() startIndex: number | undefined = 0;

  constructor(public uploadService: UploadService) { }

  getImage(item: StrapiFile[] | []) {
    if (item && item.length) {
      return this.uploadService.makeUrl(item[0]);
    }
    return '';
  }

  isImage(item: StrapiFile[] | []) {
    return item ? (item.length ? true : false) : false;
  }
}
