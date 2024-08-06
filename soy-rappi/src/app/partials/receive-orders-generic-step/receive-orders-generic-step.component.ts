import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { TipsStepBlock } from 'src/app/utils/strapi/models/blocks/tips-step.interface';
import { multimedia } from 'src/app/utils/strapi/models/partials/multimedia.enum';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-receive-orders-generic-step',
  templateUrl: './receive-orders-generic-step.component.html',
  styleUrls: ['./receive-orders-generic-step.component.scss'],
})
export class ReceiveOrdersGenericStepComponent {

  @Input() step?: TipsStepBlock;

  @Input() data: TipsStepBlock | undefined;

  @Input() stepNumber?: number | undefined = undefined;

  multimediaTypes = multimedia;

  constructor(public uploadService: UploadService,
              public sharedFunctionsService: SharedFunctionsService) {
  }
}
