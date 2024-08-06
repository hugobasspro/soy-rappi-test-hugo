import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { BannerBlock } from 'src/app/utils/strapi/models/blocks/banner.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-left-text-banner',
  templateUrl: './left-text-banner.component.html',
  styleUrls: ['./left-text-banner.component.scss'],
})
export class LeftTextBannerComponent implements OnInit {

  @Input() data: BannerBlock | undefined;

  @Input() title?: string = '';

  @Input() image: string = '';

  showMobileBanner: boolean = false;

  constructor(
    public uploadService: UploadService,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.showMobileBanner = state.matches ? true : false;
      });
  }
}
