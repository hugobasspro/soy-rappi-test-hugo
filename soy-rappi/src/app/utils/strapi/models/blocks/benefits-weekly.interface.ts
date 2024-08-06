import { StrapiFile } from "../../upload/models/strapi-file";
import { Button } from "../partials/button.interface";
import { ListItem } from "./list-item.interface";

export interface BenefitsWeekly {
    headerImageDesktop: StrapiFile;
    headerImage: StrapiFile;
    starsImage: StrapiFile;
    title: string;
    subtitle: string;
    question: string;
    textList: ListItem[];
    button1: Button;
    button2: Button;
}