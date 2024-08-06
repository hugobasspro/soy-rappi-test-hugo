import { Partner } from "../../models/blocks/benefits-partners.interface";
import { StrapiFile } from "../../upload/models/strapi-file";

export interface PartnerCategory {
  title: string;
  icon: StrapiFile;
  partners: Partner[];
}