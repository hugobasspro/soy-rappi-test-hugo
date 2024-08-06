import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsBanner } from 'src/app/utils/strapi/models/blocks/benefits-banner.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-banner',
  templateUrl: './benefits-banner.component.html',
  styleUrls: ['./benefits-banner.component.scss'],
})
export class BenefitsBannerComponent implements OnInit {
  @Input() public display!: string[];

  @Input() data!: BenefitsBanner;

  public displays: typeof Displays = Displays;

  private screenSubscription: Subscription | undefined;

  constructor(
    public uploadService: UploadService,
    public router: Router,
    public responsiveService: ResponsiveService
  ) {}

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen)
    );
  }
}
