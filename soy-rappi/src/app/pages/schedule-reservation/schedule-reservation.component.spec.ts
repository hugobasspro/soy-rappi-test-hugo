import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleReservationComponent } from './schedule-reservation.component';

describe('ScheduleReservationComponent', () => {
  let component: ScheduleReservationComponent;
  let fixture: ComponentFixture<ScheduleReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleReservationComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
