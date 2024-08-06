import { OrderedList } from './ordered-list.interface';
import { TitleRich } from './title-rich.interface';

export interface GrayBlocks {
  titleGray: TitleRich;
  bgColor: string;
  richText: string;
  orderedList: OrderedList[];
  textAfterList: string;
  mapsUrl: string;
  mapsUrl2: string;
}
