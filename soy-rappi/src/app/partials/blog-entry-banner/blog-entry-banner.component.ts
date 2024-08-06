import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { BannerDynamic } from 'src/app/utils/strapi/models/blocks/banner-dynamic.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-blog-entry-banner',
  templateUrl: './blog-entry-banner.component.html',
  styleUrls: ['./blog-entry-banner.component.scss'],
})
export class BlogEntryBannerComponent implements OnInit {

  @Input() image: string = '';

  @Input() data: BannerDynamic | undefined;

  date?: string = '';

  showMobileBanner: boolean = false;

  constructor(
    public uploadService: UploadService,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
    this.date = this.getData(this.data?.date);
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.showMobileBanner = state.matches ? true : false;
      });

  }

  getData(data: Date | undefined) {
    if (data) {
      const date = new Date(data);
      let newDate = date.toUTCString();
      newDate = newDate.split(' ').slice(0, 4).join(' ');
      return newDate;
    }
    return '';
  }
}
