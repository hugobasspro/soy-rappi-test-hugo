import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { DropdownListBlock } from 'src/app/utils/strapi/models/blocks/dropdown-list-block.interface';
import { DropdownItem } from 'src/app/utils/strapi/models/partials/dropdown-item.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-dropdown-list-block',
  templateUrl: './dropdown-list-block.component.html',
  styleUrls: ['./dropdown-list-block.component.scss'],
})
export class DropdownListComponent {

  @Input() data: DropdownListBlock | undefined;
  public selectedData: DropdownItem | undefined;
  public activeIndex = 0;

  constructor(public uploadService: UploadService,
              public sharedFunctionsService: SharedFunctionsService) { }

  ngOnInit() {
    this.changeSelected(this.activeIndex);
  }

  public changeSelected = (index: number): void => {
    const listItems = this.data?.listItems as DropdownItem[];
    this.selectedData = listItems && listItems[index];
    this.activeIndex = index;
  }
}
