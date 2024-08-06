import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Displays } from 'src/app/models/enums';
import { ResponsiveService } from 'src/app/utils/services/responsive/responsive.service';
import { BenefitsLearnVideos } from 'src/app/utils/strapi/models/blocks/benefits-learn-videos.interface';
import { VideoCategory } from 'src/app/utils/strapi/models/blocks/video-category.interface';
import { Video } from 'src/app/utils/strapi/models/blocks/video.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-learn-videos',
  templateUrl: './benefits-learn-videos.component.html',
  styleUrls: ['./benefits-learn-videos.component.scss']
})
export class BenefitsLearnVideosComponent implements OnInit, OnDestroy {

  @Input() public display!: string[];

  @Input() data!: BenefitsLearnVideos;

  selectedCategory!: VideoCategory;

  selectedIndex: number = 0;

  public displays: typeof Displays = Displays;

  private screenSubscription: Subscription | undefined;

  constructor(public responsiveService: ResponsiveService, public uploadService: UploadService) { }

  ngOnInit(): void {
    this.screenSubscription = this.responsiveService.mediaBreakpoint$.subscribe(
      (screen) => (this.display = screen),
    );

    this.selectedCategory = this.data.categories[0];
    this.getCategoriesThumbnails();
  }

  ngOnDestroy(): void {
    this.screenSubscription?.unsubscribe();
  }

  getYouTubeThumbnailUrl(youtubeUrl: string, quality: string = 'hqdefault'): string {
    const videoId = this.extractYouTubeVideoId(youtubeUrl);
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  }

  selectCategory(index: number) {
    this.selectedCategory = this.data.categories[index];
    this.selectedIndex = index;
  }

  openVideo(video: Video) {
    window.open(video.youtubeUrl, '_blank');
  }

  private getCategoriesThumbnails() {
    this.data.categories.forEach((category) => {
      category.videos.forEach((video) => {
        video.thumbnail = this.getYouTubeThumbnailUrl(video.youtubeUrl)
      })
    })
  }

  private extractYouTubeVideoId(url: string): string {
    const videoIdMatch = url.match(/(?:v=|\/embed\/|\/watch\?v=|\/\d{2,}\/|\/v\/|https:\/\/youtu.be\/|\/e\/|\/watch\?feature=player_embedded&v=)([^#\&\?]*).*/);
    return (videoIdMatch && videoIdMatch[1]) || '';
  }
}
