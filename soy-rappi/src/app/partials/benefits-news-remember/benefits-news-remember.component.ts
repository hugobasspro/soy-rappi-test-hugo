import { Component, Input, OnInit } from '@angular/core';
import { BenefitsNewsRemember } from 'src/app/utils/strapi/models/blocks/benefits-news-remember.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-benefits-news-remember',
  templateUrl: './benefits-news-remember.component.html',
  styleUrls: ['./benefits-news-remember.component.scss']
})
export class BenefitsNewsRememberComponent implements OnInit {

  @Input() data!: BenefitsNewsRemember;

  constructor(public uploadService: UploadService) { }

  ngOnInit(): void {
  }

}
