import { ListItem } from "./list-item.interface";
import { Button } from '../partials/button.interface';
import { RichText } from "./rich-text.interface";

export interface BenefitUse {
    title: string;
    description: string;
    richText: string;
    button: Button;
    tableRows: DateRow[];
}

interface DateRow {
    days: string;
    discounts: string;
    price: string;
}
