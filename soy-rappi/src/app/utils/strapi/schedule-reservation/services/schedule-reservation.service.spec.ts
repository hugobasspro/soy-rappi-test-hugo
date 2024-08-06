import { TestBed } from '@angular/core/testing';
import { ScheduleReservationService } from './schedule-reservation.service';


describe('ScheduleReservationService', () => {
  let service: ScheduleReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
