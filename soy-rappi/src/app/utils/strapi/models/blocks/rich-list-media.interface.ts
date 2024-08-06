import { StrapiFile } from '../../upload/models/strapi-file';
import { BlocksContentBlock } from './blocks-content.interface';

export interface RichListMediaBlock {
  image : StrapiFile;
  blocksContent : BlocksContentBlock[];
}
