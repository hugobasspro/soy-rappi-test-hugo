import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { DropdownItem } from 'src/app/utils/strapi/models/partials/dropdown-item.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-dropdown-list-element',
  templateUrl: './dropdown-list-element.component.html',
  styleUrls: ['./dropdown-list-element.component.scss'],
})
export class DropdownListElementComponent {

  @Input() data: DropdownItem | undefined;

  constructor(public uploadService: UploadService,
              public sharedFunctionsService: SharedFunctionsService) { }

}
