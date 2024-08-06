import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Categories } from 'src/app/utils/strapi/models/blocks/categories.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-novelty-card',
  templateUrl: './novelty-card.component.html',
  styleUrls: ['./novelty-card.component.scss'],
})
export class NoveltyCardComponent implements OnChanges {

  @Input() data: Categories | undefined;

  @Input() titleCategory: string | undefined = '';

  @Input() slug: string | undefined = '';

  date: string = '';

  constructor(private uploadService: UploadService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.currentValue) {
      this.date = this.getData(changes.data.currentValue.date);
    }
  }

  getImage(item: StrapiFile[] | []) {
    if (item.length) {
      return this.uploadService.makeUrl(item[0]);
    }
    return '';
  }

  getData(data: Date) {
    const date = new Date(data);
    let newDate = date.toUTCString();
    newDate = newDate.split(' ').slice(0, 4).join(' ');
    return newDate;
  }

}
