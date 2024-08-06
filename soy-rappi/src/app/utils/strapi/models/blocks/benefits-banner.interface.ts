import { StrapiFile } from "../../upload/models/strapi-file";

export interface BenefitsBanner {
    image: StrapiFile;
    title: string
    mobileImage: StrapiFile;
}