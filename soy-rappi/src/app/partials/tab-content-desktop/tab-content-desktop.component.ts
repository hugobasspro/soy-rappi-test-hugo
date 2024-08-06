import { Component, Input, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { TabContentsBlock } from 'src/app/utils/strapi/models/blocks/tab-contents.interface';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-tab-content-desktop',
  templateUrl: './tab-content-desktop.component.html',
  styleUrls: ['./tab-content-desktop.component.scss'],
})
export class TabContentDesktopComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;

  @Input() tabs: TitleDescriptionImage[] | undefined = [];

  @Input() data: TabContentsBlock | undefined;

  @Input() title?: string;

  @Input() text?: string = '';

  isActive: number = 0;

  constructor(public uploadService : UploadService) {}

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
      this.isActive = tabId;
    }
  }
}
