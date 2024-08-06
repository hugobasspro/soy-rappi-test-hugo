import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { VehicleTypeBox } from 'src/app/utils/strapi/models/partials/vehicle-type-box.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-vehicle-type-block',
  templateUrl: './vehicle-type-block.component.html',
  styleUrls: ['./vehicle-type-block.component.scss'],
})
export class VehicleTypeBlockComponent {

  @Input() vehicleTypeBoxes?: VehicleTypeBox[] = [];

  @Input() title?: string = '';

  @Input() subtitle?: string = '';

  constructor(public uploadService : UploadService) { }
}
