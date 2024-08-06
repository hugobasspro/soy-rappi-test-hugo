import { StrapiFile } from "../../upload/models/strapi-file";
import { RichText } from "./rich-text.interface";

export interface BenefitsDeliveryman {
    image: StrapiFile;
    paragraph1: string;
    paragraph2: string;
    title: string;
    desktopImage: StrapiFile;
}