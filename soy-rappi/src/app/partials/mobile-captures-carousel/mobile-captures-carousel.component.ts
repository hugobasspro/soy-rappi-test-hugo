import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { CaptureDynamic } from 'src/app/utils/strapi/models/blocks/capture-dynamic.interface';
import { Capture } from 'src/app/utils/strapi/models/blocks/capture.interface';
import { TitleDescriptionImage } from 'src/app/utils/strapi/models/partials/title-description-image.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-mobile-captures-carousel',
  templateUrl: './mobile-captures-carousel.component.html',
  styleUrls: ['./mobile-captures-carousel.component.scss'],
})
export class MobileCapturesCarouselComponent {

  @Input() bgColor?: string = '';

  @Input() captures?: Capture[] = [];

  @Input() data: CaptureDynamic | undefined;

  startPosition: number = 0;

  modalRef?: BsModalRef;

  customOptions: OwlOptions = {
    center: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 25,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      400: {
        items: 2,
        nav: false,
      },
      740: {
        items: 3,
      },
      1024: {
        items: 5,
      },
    },
    nav: false,
  };

  modalSlider: OwlOptions = {
    center: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      1024: {
        items: 1,
      },
    },
    nav: true,
  };


  constructor(private modalService: BsModalService,
              public uploadService: UploadService) { }

  openModal(template: TemplateRef<TitleDescriptionImage>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'modal-dialog-centered modal-slider' }),
    );
  }


  previewCapture(captureId: number): void {
    alert(captureId);
  }

  getData(data: SlidesOutputData) {
    if (data && data.startPosition) {
      this.startPosition = data.startPosition;
    } else {
      this.startPosition = 0;
    }
  }

  validateData(data: Capture[] | undefined) {
    if (data?.length) {
      return true;
    }
    return false;
  }

  styleColor(data: CaptureDynamic | undefined) {
    if (data?.bgColor) {
      return data?.bgColor;
    }
    return '#fff0dd';
  }
}
