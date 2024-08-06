import { StrapiBaseComponent } from '../../base/models/strapi-base-component';
import { FormDynamic } from '../../form-dynamic/models/form-dynamic';
import { StrapiFile } from '../../upload/models/strapi-file';
import { ContestDescription } from './contest-description';
import { ContestTerms } from './contest-terms';

export interface Contest extends StrapiBaseComponent {
  title: string;
  contests: ContestData[];
}

export interface ContestData {
  name: string;
  title: string;
  logo: StrapiFile;
  id: number;
  description: ContestDescription[];
  form: FormDynamic;
  termsAndConditions: ContestTerms;
}
