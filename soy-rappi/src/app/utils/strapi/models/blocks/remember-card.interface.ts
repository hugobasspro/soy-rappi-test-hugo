import { StrapiFile } from "../../upload/models/strapi-file";

export interface RememberCard {
    image: StrapiFile;
    title: string;
    description: string;
}