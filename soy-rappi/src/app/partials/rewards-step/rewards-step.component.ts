import { Component, Input } from '@angular/core';
import { ImageTitleBlock } from 'src/app/utils/strapi/models/blocks/image-title.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-rewards-step',
  templateUrl: './rewards-step.component.html',
  styleUrls: ['./rewards-step.component.scss'],
})
export class RewardsStepComponent {

  @Input() data?: ImageTitleBlock;

  @Input() imageToLeft?: boolean = false;

  constructor(public uploadService: UploadService) { }

}
