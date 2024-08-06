import { StapTitleBlock } from '../../models/blocks/stap-title.interface';
import { CallToActionButton } from '../../models/partials/call-to-action-button.interface';
import { StrapiFile } from '../../upload/models/strapi-file';
export interface StapBlock {
  stapTitle: StapTitleBlock[];
  description : string;
  callToActionButton:CallToActionButton;
  bgType:string;
  bgColor:string;
  textSide:string;
  type:string;
  media:StrapiFile;
}
