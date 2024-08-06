import { StrapiFile } from "../../upload/models/strapi-file";
import { VideoCategory } from "./video-category.interface";

export interface BenefitsLearnVideos {
    topImage: StrapiFile;
    topImageDesktop: StrapiFile;
    rightImage: StrapiFile;
    title: string;
    categories: VideoCategory[];
}