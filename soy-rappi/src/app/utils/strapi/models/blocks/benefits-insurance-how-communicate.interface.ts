import { StrapiFile } from "../../upload/models/strapi-file";
import { ListItem } from "./list-item.interface"

export interface BenefitsInsuranceHowCommunicate {
    title: string
    list: ListItem[];
    steps: ListItem[];
    image: StrapiFile;
    desktopImage: StrapiFile;
}