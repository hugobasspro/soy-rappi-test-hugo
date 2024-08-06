import { StrapiFile } from "../../upload/models/strapi-file";
import { Video } from "./video.interface";

export interface VideoCategory {
    name: string;
    icon: StrapiFile;
    videos: Video[];
}