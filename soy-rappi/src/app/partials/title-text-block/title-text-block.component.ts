import { Component, Input } from '@angular/core';
import { SharedFunctionsService } from 'src/app/utils/shared/services/functions.service';
import { TextBlock } from 'src/app/utils/strapi/models/blocks/text-block.interface';
import { TitleRich } from 'src/app/utils/strapi/models/blocks/title-rich.interface';

@Component({
  selector: 'app-title-text-block',
  templateUrl: './title-text-block.component.html',
  styleUrls: ['./title-text-block.component.scss'],
})
export class TitleTextBlockComponent {

  @Input() data: TextBlock | undefined;

  @Input() text?: string = '';

  @Input() titleInformative: TitleRich | undefined;

  @Input() textColor?: string = '';

  constructor(public sharedFunctionsService: SharedFunctionsService) { }

}
