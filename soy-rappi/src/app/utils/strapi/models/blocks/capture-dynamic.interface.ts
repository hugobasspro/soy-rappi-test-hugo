import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { Capture } from './capture.interface';


export interface CaptureDynamic extends StrapiBaseComponent {
  bgColor: string;
  captures: Capture[];
}
