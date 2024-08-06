import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsPartners } from 'src/app/utils/strapi/models/blocks/benefits-partners.interface';
import { PartnerCategory } from 'src/app/utils/strapi/partner-categories/models/partner-category';
import { PartnerCategoriesService } from 'src/app/utils/strapi/partner-categories/services/partner-category.service';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-partners',
  templateUrl: './benefits-partners.component.html',
  styleUrls: ['./benefits-partners.component.scss']
})
export class BenefitsPartnersComponent implements OnInit, OnDestroy {

  @Input() public display!: string[];

  @Input() data!: BenefitsPartners;

  selectedCategory?: PartnerCategory;

  selectedIndex: number = 0;

  categories!: PartnerCategory[];

  public displays: typeof Displays = Displays;

  private screenSubscription: Subscription | undefined;

  constructor(
    public responsiveService: ResponsiveService,
    public uploadService: UploadService,
    private partnerCategoriesService: PartnerCategoriesService
  ) { }

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen),
    );

    this.partnerCategoriesService.getEntries().subscribe((res: any) => {
      this.selectedCategory = res.data[0];
      this.categories = res.data;
    })
  }

  ngOnDestroy(): void {
    this.screenSubscription?.unsubscribe();
  }

  selectCategory(i: number) {
    this.selectedCategory = this.categories[i];
    this.selectedIndex = i;
  }
}
