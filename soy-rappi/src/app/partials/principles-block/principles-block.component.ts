import { Component, Input } from '@angular/core';
import { PrincipalesBlock } from 'src/app/utils/strapi/models/blocks/principales.interface';
import { PrinciplesItemsBlock } from 'src/app/utils/strapi/models/blocks/principles-items.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-principles-block',
  templateUrl: './principles-block.component.html',
  styleUrls: ['./principles-block.component.scss'],
})
export class PrinciplesBlockComponent {

  @Input() data?: PrincipalesBlock;

  @Input() title?: string = '';

  @Input() principles?: PrinciplesItemsBlock[] = [];

  constructor(public uploadService: UploadService) { }
}
