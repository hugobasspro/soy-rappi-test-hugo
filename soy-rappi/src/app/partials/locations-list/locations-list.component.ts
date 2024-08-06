import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { LocationList } from 'src/app/utils/strapi/models/blocks/location-list.interface';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss'],
})
export class LocationsListComponent {

  @Input() items?: LocationList[] = [];

  @Input() previewLocation?: string = '';

  currentIndex : number = 0;

  constructor(public sharedFunctionsService: SharedFunctionsService) {}

  clickIndex(i:number) {
    this.currentIndex = i;
    this.sharedFunctionsService.mapUrlIndex = i;
  }

}
