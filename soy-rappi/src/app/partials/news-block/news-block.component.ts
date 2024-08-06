import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';
import { NewCard } from 'src/app/utils/strapi/models/blocks/new-card.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss'],
})
export class NewsBlockComponent {

  @Input() data: NewCard | undefined;

  @Input() news?: BlogEntry[] = [];

  constructor(
    public uploadService: UploadService,
    public sharedFunctionsService: SharedFunctionsService,
  ) { }
}
