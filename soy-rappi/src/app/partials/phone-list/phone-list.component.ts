import { Component, Input, OnInit } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { listText } from 'src/app/utils/strapi/form-modal/models/form-modal.interface';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent {

  @Input() listItems: listText[] = [];

  constructor(public sharedFunctionsService: SharedFunctionsService) {}

}
