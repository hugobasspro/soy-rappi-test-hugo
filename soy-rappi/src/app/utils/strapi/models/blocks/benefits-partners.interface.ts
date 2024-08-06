import { PartnerCategory } from "../../partner-categories/models/partner-category";
import { StrapiFile } from "../../upload/models/strapi-file";
import { Button } from "../partials/button.interface";
import { ListItem } from "./list-item.interface";
import { RichText } from "./rich-text.interface";

export interface BenefitsPartners {
    title: string;
    image: StrapiFile;
}

export interface Partner {
    title: string;
    subtitle: string;
    image: StrapiFile;
    textList: ListItem[];
    button1?: Button;
    button2?: Button;
    button3?: Button;
    exchangeButton: Button;
    imageBorder: boolean;
    extraText?: string;
    imageDescription: string;
}
