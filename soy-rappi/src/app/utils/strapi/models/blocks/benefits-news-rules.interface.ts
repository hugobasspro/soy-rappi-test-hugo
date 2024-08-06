import { StrapiFile } from "../../upload/models/strapi-file";
import { ListItem } from "./list-item.interface";

export interface BenefitsNewsRules {
    rightImage: StrapiFile;
    image: StrapiFile;
    title: string;
    subtitle: string;
    rules: ListItem[];
    bottomImage: StrapiFile;
    bottomImageDesktop: StrapiFile;
}