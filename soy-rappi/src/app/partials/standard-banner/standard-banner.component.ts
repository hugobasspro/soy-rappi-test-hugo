import { Component, Input, OnInit } from '@angular/core';
import { OrderType } from '../../utils/strapi/order-type/models/order-type';
import { BannerBlock } from '../../utils/strapi/models/blocks/banner.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-standard-banner',
  templateUrl: './standard-banner.component.html',
  styleUrls: ['./standard-banner.component.scss'],
})
export class StandardBannerComponent implements OnInit {

  @Input() data: BannerBlock | undefined;

  @Input() backgroundUrl: string = 'assets/img/new-deliver-bg1.png';

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
