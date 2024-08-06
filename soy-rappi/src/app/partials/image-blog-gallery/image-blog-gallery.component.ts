import { Component, Input  } from '@angular/core';
import { BlogGallery, SmallImages } from 'src/app/utils/strapi/models/blocks/blog-gallery.interface';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-image-blog-gallery',
  templateUrl: './image-blog-gallery.component.html',
  styleUrls: ['./image-blog-gallery.component.scss'],
})
export class ImageBlogGalleryComponent {

  @Input() data: BlogGallery | undefined;

  constructor(private uploadService: UploadService) { }

  // data?.smallImages && data?.smallImages?.length <= 0

  getCount(item: BlogGallery | undefined) {
    if (item?.smallImages.length) {
      return false;
    }
    return true;
  }

  getImage(item: StrapiFile | undefined) {
    if (item) {
      return this.uploadService.makeUrl(item);
    }
    return '';
  }

  getSmallImage(item: StrapiFile[]) {
    if (item.length) {
      return this.uploadService.makeUrl(item[0]);
    }
    return '';
  }

}
