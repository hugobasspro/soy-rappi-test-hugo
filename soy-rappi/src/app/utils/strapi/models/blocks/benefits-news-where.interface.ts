import { StrapiFile } from "../../upload/models/strapi-file";
import { BenefitsLocation } from "./benefits-location.interface";

export interface BenefitsNewsWhere {
    title: string;
    subtitle: string;
    cities: City[];
    image: StrapiFile
}

export interface City {
    name: string;
    locations: BenefitsLocation[]
}