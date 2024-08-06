import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { LeftRightImageBlock } from 'src/app/utils/strapi/models/blocks/left-right-image-block.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-right-image-block',
  templateUrl: './right-image-block.component.html',
  styleUrls: ['./right-image-block.component.scss'],
})
export class RightImageBlockComponent {

  @Input() data: LeftRightImageBlock | undefined;
  public isMobile = false;

  constructor(public uploadService: UploadService,
              public sharedFunctionsService: SharedFunctionsService,
              private breakpointObserver: BreakpointObserver) {
                this.breakpointObserver
                    .observe(['(max-width: 1023px)'])
                    .subscribe((result: BreakpointState) => {
                      this.isMobile = result.matches;
                    });
              }
}
