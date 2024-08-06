import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ServerSideRenderingService } from 'src/app/utils/server-side-rendering/services/server-side-rendering.service';
import { Blog } from 'src/app/utils/strapi/blog/models/blog';
import { BlogEntry } from 'src/app/utils/strapi/blog/models/blog-categories';
import { CategoriesFilters } from 'src/app/utils/strapi/blog/models/categories-filters';
import { BlogCategoriesService } from 'src/app/utils/strapi/blog/services/blog-categories/blog-categories.service';
import { BlogService } from 'src/app/utils/strapi/blog/services/blog.service';
import { NewsBlogsService } from 'src/app/utils/strapi/blog/services/new-blogs/news-blogs.service';
import { SeoInformationService } from '../../utils/strapi/seo/services/seo-information.service';
const limit = 2;
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit, OnDestroy {

  blog: Blog | undefined = this.ssrService.getState<Blog | undefined>('Blog', undefined);

  categories: CategoriesFilters[] = this.ssrService.getState<CategoriesFilters[] | []>('CategoriesFilters', []);

  mostRecent: BlogEntry[] = this.ssrService.getState<BlogEntry[] | []>('mostRecent', []);

  lastNews: BlogEntry[] = this.ssrService.getState<BlogEntry[] | []>('lastNews', []);

  realStories: BlogEntry[] = this.ssrService.getState<BlogEntry[] | []>('realStories', []);

  searchData: BlogEntry[] = [];

  searchOldData: BlogEntry[] = [];

  lastStory: BlogEntry | undefined;

  numberOfPages: number = 0;

  currentPage: number = 1;

  start: number = 0;

  data: string = '';

  limitSearch: number = limit;

  listMostRecent: boolean = false;

  listRealStories: boolean = false;

  listNews: boolean = false;

  private subscription: Subscription = new Subscription();

  constructor(private ssrService: ServerSideRenderingService,
              private blogService: BlogService,
              private blogCategoriesService: BlogCategoriesService,
              private newsBlogsService: NewsBlogsService,
              private seoService: SeoInformationService) { }

  ngOnInit() {
    this.setMetaData();
    this.subscription.add(
      this.blogService.getBlogPageData().subscribe((res) => {
        this.blog = (res.data) ? res.data : undefined;
        this.ssrService.setState<Blog | undefined>('Blog', this.blog);
        this.setMetaData();
      }),
    );
    this.subscription.add(
      this.blogCategoriesService.getCategories().subscribe((res) => {
        this.categories = (res.data) ? res.data : [];
        this.ssrService.setState<CategoriesFilters[] | undefined>('CategoriesFilters', this.categories);
        this.setMetaData();
      }),
    );

    this.newsBlogsService.getMostRecent(1000).pipe(
      map(res => {
        this.mostRecent = (res.data) ? res.data : [];
        this.ssrService.setState<BlogEntry[] | undefined>('mostRecent', this.mostRecent);
        this.setMetaData();
        return this.mostRecent;
      }),
      mergeMap(mostRecent => {
        const lastNews = this.newsBlogsService.getLastNews(10);
        const lastStories = this.newsBlogsService.getStories(10);
        return forkJoin([lastNews, lastStories]);
      }),
    ).subscribe(result => {

      this.lastNews = (result[0].data) ? result[0].data : [];
      this.ssrService.setState<BlogEntry[] | undefined>('lastNews', this.lastNews);

      this.realStories = (result[1].data) ? result[1].data : [];
      this.ssrService.setState<BlogEntry[] | undefined>('realStories', this.realStories);
      this.lastStory = this.realStories.shift();

      this.setMetaData();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setMetaData(): void {
    if (this.blog) {
      this.seoService.setSEOInformation(this.blog.seoInformation);
    }
  }

  onSearch(value: BlogEntry[]) {
    this.searchData = value;
  }

  onSearchCountPage(count: number) {
    if (this.searchData.length) {
      this.start = this.searchData.length;
      this.numberOfPages = Math.ceil(count / this.searchData.length);
    } else {
      this.numberOfPages = 1;
    }
  }

  onSearchNextPage(page: number) {
    this.currentPage = page;
    if (page === 1) {
      this.start = 0;
    } else {
      this.start = limit * (page - 1);
    }
    const query = {
      q: this.data,
      limit,
      start: this.start,
    };
    this.newsBlogsService.getEntries(query).subscribe((res) => {
      if (res.data) {
        this.searchData = res.data;
      } else {
        this.searchData = [];
      }
    });
  }

  onSearchData(data: string) {
    this.data = data;
    this.listMostRecent = false;
    this.listNews = false;
    this.listRealStories = false;
  }

  openMostRecent(event: Event) {
    this.listMostRecent = true;
  }

  openNews(event: Event) {
    this.listNews = true;
  }

  openRealStories(event: Event) {
    if (this.lastStory) {
      this.realStories.unshift(this.lastStory);
    }
    this.listRealStories = true;
  }
}
