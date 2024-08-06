import { Component, Input, OnInit } from '@angular/core';
import { InsureBanner } from 'src/app/utils/strapi/models/blocks/insure-banner.interface';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insure-banner',
  templateUrl: './insure-banner.component.html',
  styleUrls: ['./insure-banner.component.scss'],
})
export class InsureBannerComponent implements OnInit {
  @Input() public display!: string[];

  @Input() data!: InsureBanner;

  public displays: typeof Displays = Displays;

  titleParts: string[] = [];

  private screenSubscription: Subscription | undefined;

  constructor(
    public responsiveService: ResponsiveService,
    public router: Router,
    public uploadService: UploadService
  ) {}

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen)
    );
    this.processTitle();
  }

  processTitle() {
    const words = this.data.title.split(' ');
    this.titleParts = [];
    for (let i = 0; i < words.length; i += 2) {
      this.titleParts.push(words.slice(i, i + 2).join(' '));
    }
  }
}
