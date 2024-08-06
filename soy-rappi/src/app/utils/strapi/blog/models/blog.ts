import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { BannerBlock } from '../../models/blocks/banner.interface';
import { Categories } from '../../models/blocks/categories.interface';
import { NovidadesBlog } from '../../models/blocks/novidades-blog.interface';
import { RecentEntries } from '../../models/blocks/recent-entries.interface';
import { SeoInformation } from '../../seo/models/seo-information';

export interface Blog extends StrapiBaseModel {
  banner: BannerBlock;
  filterText: string;
  searchPlaceholder: string;
  mostRecentsTitle: string;
  mostRecentsLabel: string;
  newsTitle: string;
  newsLabel: string;
  realStoriesTitle: string;
  realStoriesLabel: string;
  slug: string;
  seoInformation: SeoInformation;
  mostRecentsUrl: string;
  newsUrl: string;
  realStoriesUrl: string;
}
