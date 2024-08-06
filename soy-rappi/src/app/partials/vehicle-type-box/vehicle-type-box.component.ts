import { Component, Input } from '@angular/core';
import { Texts } from 'src/app/utils/strapi/models/partials/texts.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-vehicle-type-box',
  templateUrl: './vehicle-type-box.component.html',
  styleUrls: ['./vehicle-type-box.component.scss'],
})
export class VehicleTypeBoxComponent {

  @Input() vehicleImage: string = '';

  @Input() type: string = '';

  @Input() requirements?: Texts[] = [];

  constructor(public uploadService : UploadService) { }

}
