import { Component, Input } from '@angular/core';
import { FoundarBlock } from 'src/app/utils/strapi/models/blocks/foundar-block.interface';
import { OurFoundarBlock } from 'src/app/utils/strapi/models/blocks/our-foundar.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-founders-block',
  templateUrl: './founders-block.component.html',
  styleUrls: ['./founders-block.component.scss'],
})
export class FoundersBlockComponent {

  @Input() data?: OurFoundarBlock;

  @Input() founders?: FoundarBlock[] = [];

  @Input() title?: string = '';

  constructor(public uploadService: UploadService) { }
}
