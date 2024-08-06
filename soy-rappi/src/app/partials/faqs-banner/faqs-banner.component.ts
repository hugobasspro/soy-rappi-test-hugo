import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { FaqsBanner } from 'src/app/utils/strapi/models/blocks/faqs-banner.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-faqs-banner',
  templateUrl: './faqs-banner.component.html',
  styleUrls: ['./faqs-banner.component.scss'],
})
export class FaqsBannerComponent implements OnInit {
  @Input() public display!: string[];

  @Input() data!: FaqsBanner;

  public displays: typeof Displays = Displays;

  firstWord: string = '';
  remainingWords: string = '';

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
    const firstSpaceIndex = this.data.title.indexOf(' ');
    if (firstSpaceIndex !== -1) {
      this.firstWord = this.data.title.substring(0, firstSpaceIndex);
      this.remainingWords = this.data.title.substring(firstSpaceIndex + 1);
    } else {
      this.firstWord = this.data.title;
    }
  }
}
