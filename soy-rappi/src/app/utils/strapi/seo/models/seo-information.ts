import { StrapiBaseModel } from '../../base/models/strapi-base-model';
import { OpenGraph } from './open-graph';
import { TwitterCard } from './twitter-card';

export interface SeoInformation {
  pageTitle: string;
  metaDescription: string;
  robots: string;
  openGraph: OpenGraph;
  twitterCard: TwitterCard;
}
