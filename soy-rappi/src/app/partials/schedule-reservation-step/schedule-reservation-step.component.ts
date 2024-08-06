import { Component, Input } from '@angular/core';
import { RichText } from 'src/app/utils/strapi/models/blocks/rich-text.interface';

@Component({
  selector: 'app-schedule-reservation-step',
  templateUrl: './schedule-reservation-step.component.html',
  styleUrls: ['./schedule-reservation-step.component.scss'],
})
export class ScheduleReservationStepComponent {

  @Input() index: number = 0;

  @Input() question: string = '';

  @Input() answer: string = '';

  @Input() image?: string = '';

  @Input() imageToLeft?: boolean = false;

  @Input() list?: RichText[] = [];

  constructor() { }
}
