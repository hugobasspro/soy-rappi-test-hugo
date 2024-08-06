import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';
import { CategoriesFilters } from 'src/app/utils/strapi/blog/models/categories-filters';
import { NewsBlogsService } from 'src/app/utils/strapi/blog/services/new-blogs/news-blogs.service';
import { BannerBlock } from 'src/app/utils/strapi/models/blocks/banner.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';
@Component({
  selector: 'app-blog-banner',
  templateUrl: './blog-banner.component.html',
  styleUrls: ['./blog-banner.component.scss'],
})
export class BlogBannerComponent implements OnInit {

  @Input() data: BannerBlock | undefined;

  @Input() filterText: string = '';

  @Input() categories: CategoriesFilters[] = [];

  @Input() search: string = '';

  @Input() page: number = 0;

  @Input() limit: number = 0;

  @Output() searchData: EventEmitter<BlogEntry[]> = new EventEmitter();

  @Output() count: EventEmitter<number> = new EventEmitter();

  @Output() searchText: EventEmitter<string> = new EventEmitter();

  showMobileBanner: boolean = false;

  constructor(
    public uploadService: UploadService,
    public breakpointObserver: BreakpointObserver,
    private newsBlogsService: NewsBlogsService,
  ) { }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      if (this.page === 1) {
        this.page--;
      }
      const query = {
        q: target.value,
        limit: this.limit,
        start: this.page,
      };
      this.searchText.emit(target.value);
      this.newsBlogsService.countEntries(query).subscribe((res) => {
        if (res.data) {
          this.count.emit(res.data);
        }
      });
      this.newsBlogsService.getEntries(query).subscribe((res) => {
        if (res.data) {
          this.searchData.emit(res.data);
        } else {
          this.searchData.emit([]);
        }
      });
    } else {
      this.searchData.emit([]);
    }
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.showMobileBanner = state.matches ? true : false;
      });
  }
}
