import { Component, Input, OnInit } from '@angular/core';
import { ContestDescription } from 'src/app/utils/strapi/contest/models/contest-description';
import { UploadService } from 'src/app/utils/strapi/upload/services/upload.service';

@Component({
  selector: 'app-contest-description',
  templateUrl: './contest-description.component.html',
  styleUrls: ['./contest-description.component.scss']
})
export class ContestDescriptionComponent implements OnInit {

  @Input() data: ContestDescription | undefined;

  constructor(
    public uploadService : UploadService,
  ) { }

  ngOnInit(): void {
  }

}
