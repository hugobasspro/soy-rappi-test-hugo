import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsNewsRules } from 'src/app/utils/strapi/models/blocks/benefits-news-rules.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-news-rules',
  templateUrl: './benefits-news-rules.component.html',
  styleUrls: ['./benefits-news-rules.component.scss']
})
export class BenefitsNewsRulesComponent implements OnInit, OnDestroy {

  @Input() public display!: string[];

  @Input() data!: BenefitsNewsRules;

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
