import { StrapiFile } from "../../upload/models/strapi-file";
import { Question } from "./question.interface";

export interface BenefitsInsuranceFaq {
    image: StrapiFile;
    title: string;
    faq: Question[];
}