import { Button } from '../../models/partials/button.interface';
import { StrapiFile } from '../../upload/models/strapi-file';
export interface Footer {
  termsAndConditionsText: string;
  termsAndConditionsLink: string;
  copyrightText: string;
  countriesTitle: string;
  facebookLink: string;
  youtubeLink: string;
  countries: Button[];
  logo: StrapiFile;
}
