import { StrapiFile } from "../../upload/models/strapi-file";

export interface Video {
    thumbnail?: string;
    youtubeUrl: string;
    title: string;
    minutes: number;
    seconds: number;
}