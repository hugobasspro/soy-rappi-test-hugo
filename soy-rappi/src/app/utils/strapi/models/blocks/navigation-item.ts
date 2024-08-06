import { Link } from '../../links/models/link';

export interface NavigationItem {
  label: string;
  link: Link;
  externalLink?: string;
}
