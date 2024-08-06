import { Component, Input } from '@angular/core';
import { StrapiFile } from 'src/app/utils/strapi/upload/models/strapi-file';
import { RegisterFormPlaceholder } from 'src/app/utils/strapi/models/partials/register-form-placeholder.interface';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-register-block',
  templateUrl: './register-block.component.html',
  styleUrls: ['./register-block.component.scss'],
})
export class RegisterBlockComponent {

  @Input() image?: StrapiFile;

  @Input() form?: RegisterFormPlaceholder;

  constructor(public uploadService: UploadService) { }

}
