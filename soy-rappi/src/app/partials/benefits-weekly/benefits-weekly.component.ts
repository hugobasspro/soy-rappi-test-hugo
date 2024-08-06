import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsWeekly } from 'src/app/utils/strapi/models/blocks/benefits-weekly.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-weekly',
  templateUrl: './benefits-weekly.component.html',
  styleUrls: ['./benefits-weekly.component.scss']
})
export class BenefitsWeeklyComponent implements OnInit, OnDestroy {

  @Input() public display!: string[];

  @Input() data!: BenefitsWeekly

  public displays: typeof Displays = Displays;

  private screenSubscription: Subscription | undefined;

  constructor(public responsiveService: ResponsiveService, public uploadService: UploadService) { }

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen),
    );
  }

  ngOnDestroy(): void {
    this.screenSubscription?.unsubscribe();
  }
}
