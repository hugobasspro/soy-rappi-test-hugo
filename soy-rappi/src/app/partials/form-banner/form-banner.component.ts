import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { FormBanner } from 'src/app/utils/strapi/models/blocks/form-banner.interface';
import { RegisterFormPlaceholder } from 'src/app/utils/strapi/models/partials/register-form-placeholder.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
@Component({
  selector: 'app-form-banner',
  templateUrl: './form-banner.component.html',
  styleUrls: ['./form-banner.component.scss'],
})
export class FormBannerComponent implements OnInit {

  @Input() data: FormBanner | undefined;

  @Input() background?: string = '';

  @Input() registerFormPlaceholders?: RegisterFormPlaceholder;

  showMobileBanner: boolean = false;

  constructor(
    public uploadService: UploadService,
    public breakpointObserver: BreakpointObserver,
  ) {}

  getImage(item: StrapiFile[] | []) {
    if (item.length) {
      return item[0];
    }
    return '';
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.showMobileBanner = state.matches ? true : false;
      });
  }
}
