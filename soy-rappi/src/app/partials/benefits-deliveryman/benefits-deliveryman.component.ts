import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsDeliveryman } from 'src/app/utils/strapi/models/blocks/benefits-deliveryman.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-deliveryman',
  templateUrl: './benefits-deliveryman.component.html',
  styleUrls: ['./benefits-deliveryman.component.scss']
})
export class BenefitsDeliverymanComponent implements OnInit, OnDestroy {

  @Input() public display!: string[];

  @Input() data!: BenefitsDeliveryman;

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