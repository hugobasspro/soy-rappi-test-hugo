import { Injectable } from '@angular/core';
import { SeoInformation } from '../models/seo-information';
import { Meta, Title } from '@angular/platform-browser';
import { TwitterCard, TwitterCardFields } from '../models/twitter-card';
import { UploadService } from '../../upload/services/upload.service';
import { OpenGraph, OpenGraphFields } from '../models/open-graph';
import { ServerSideRenderingService } from '../../../server-side-rendering/services/server-side-rendering.service';

@Injectable({
  providedIn: 'root',
})
export class SeoInformationService {

  constructor(private metaService: Meta,
              private uploadService: UploadService,
              private titleService: Title,
              private ssrService: ServerSideRenderingService) { }

  setSEOInformation(info: SeoInformation) {
    if (!info)
      return;
    this.titleService.setTitle(info.pageTitle);
    this.setMetas(info);
    this.setTwitterMetaTags(info.twitterCard);
    this.setOpenGraphMetaTags(info.openGraph);
  }

  createOrUpdateMetaTagByProperty(property: string,content: string) {
    this.metaService.addTag({ property, content });
  }

  createOrUpdateMetaTagByName(name: string,content: string) {
    this.metaService.addTag({ name, content });
  }

  setTwitterMetaTags(twitterCard: TwitterCard) {
    if (!twitterCard)
      return;
    this.createOrUpdateMetaTagByProperty(TwitterCardFields.TITLE, twitterCard.title);
    this.createOrUpdateMetaTagByProperty(TwitterCardFields.DESCRIPTION, twitterCard.title);
    if (twitterCard.image) {
      this.createOrUpdateMetaTagByProperty(TwitterCardFields.IMAGE, this.uploadService.makeUrl(twitterCard.image));
      if (twitterCard.image.alternativeText) {
        this.createOrUpdateMetaTagByProperty(TwitterCardFields.IMAGE_ALT, twitterCard.image.alternativeText);
      }
    }
    this.createOrUpdateMetaTagByProperty(TwitterCardFields.CARD, twitterCard.card);
    this.createOrUpdateMetaTagByProperty(TwitterCardFields.CREATOR, twitterCard.creator);
    this.createOrUpdateMetaTagByProperty(TwitterCardFields.SITE, twitterCard.site);
  }

  setOpenGraphMetaTags(opengraph: OpenGraph) {
    if (!opengraph)
      return;
    this.createOrUpdateMetaTagByProperty(OpenGraphFields.TITLE, opengraph.title);
    this.createOrUpdateMetaTagByProperty(OpenGraphFields.TYPE, opengraph.type);
    this.createOrUpdateMetaTagByProperty(OpenGraphFields.DESCRIPTION, opengraph.description);

    this.createOrUpdateMetaTagByProperty(OpenGraphFields.URL, this.ssrService.getDocument().location.href);
    this.createOrUpdateMetaTagByProperty(OpenGraphFields.SITE_NAME, opengraph.siteName);
    if (opengraph.image && opengraph.image.url && opengraph.image.alternativeText) {
      this.createOrUpdateMetaTagByProperty(OpenGraphFields.IMAGE, this.uploadService.makeUrl(opengraph.image));
      this.createOrUpdateMetaTagByProperty(OpenGraphFields.IMAGE_ALT, opengraph.image.alternativeText);
      if (opengraph.image.width)
        this.createOrUpdateMetaTagByProperty(OpenGraphFields.IMAGE_WIDTH, String(opengraph.image.width));
      if (opengraph.image.height)
        this.createOrUpdateMetaTagByProperty(OpenGraphFields.IMAGE_HEIGHT, String(opengraph.image.height));
      if (opengraph.image.mime)
        this.createOrUpdateMetaTagByProperty(OpenGraphFields.IMAGE_TYPE, String(opengraph.image.mime));
    }
  }

  setMetas(info: SeoInformation) {
    this.createOrUpdateMetaTagByName('description', info.metaDescription);
    this.createOrUpdateMetaTagByName('robots', info.robots);
  }
}
