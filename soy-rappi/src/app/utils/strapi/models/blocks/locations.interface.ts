import { Button } from '../partials/button.interface';
import { LocationList } from './location-list.interface';

export interface LocationsBlock {
  locations: LocationList[];
  button: Button;
  previewLocationText: string;
}
