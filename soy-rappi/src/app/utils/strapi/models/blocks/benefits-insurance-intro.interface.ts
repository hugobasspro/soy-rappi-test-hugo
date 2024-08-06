import { StrapiFile } from "../../upload/models/strapi-file";
import { ListItem } from "./list-item.interface";

export interface BenefitsInsuranceIntro {
    title: string;
    image: StrapiFile;
    description: ListItem[];
}