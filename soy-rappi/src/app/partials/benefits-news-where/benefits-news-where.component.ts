import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsNewsWhere, City } from 'src/app/utils/strapi/models/blocks/benefits-news-where.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-news-where',
  templateUrl: './benefits-news-where.component.html',
  styleUrls: ['./benefits-news-where.component.scss']
})
export class BenefitsNewsWhereComponent implements OnInit, OnDestroy {

  @Input() public display!: string[];

  @Input() data!: BenefitsNewsWhere;

  selectedCity!: City;

  selectedIndex: number = 0;

  public displays: typeof Displays = Displays;

  private screenSubscription: Subscription | undefined;

  constructor(public responsiveService: ResponsiveService, public uploadService: UploadService) { }

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen),
    );

    this.selectedCity = this.data.cities[0];
  }

  ngOnDestroy(): void {
    this.screenSubscription?.unsubscribe();
  }

  selectCity(index: number) {
    this.selectedCity = this.data.cities[index];
    this.selectedIndex = index;
  }
}
