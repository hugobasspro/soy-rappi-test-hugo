import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { LocationList } from 'src/app/utils/strapi/models/blocks/location-list.interface';
import { TitleRich } from 'src/app/utils/strapi/models/blocks/title-rich.interface';
import { Button } from 'src/app/utils/strapi/models/partials/button.interface';
import { LocationBlock } from 'src/app/utils/strapi/models/partials/location-block.interface';

@Component({
  selector: 'app-bag-locations',
  templateUrl: './bag-locations.component.html',
  styleUrls: ['./bag-locations.component.scss'],
})
export class BagLocationsComponent {

  @Input() title?: TitleRich;

  @Input() description?: string = '';

  @Input() subtitle?: string = '';

  @Input() list?: LocationList[] = [];

  @Input() subtitleDescription?: string = '';

  @Input() button?: Button | undefined;

  @Input() previewLocation?: string = '';

  @Input() data: LocationBlock | undefined;

  constructor(public sharedFunctionsService: SharedFunctionsService) {}
}
