import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleReservationStepComponent } from './schedule-reservation-step.component';

describe('ScheduleReservationStepComponent', () => {
  let component: ScheduleReservationStepComponent;
  let fixture: ComponentFixture<ScheduleReservationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleReservationStepComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleReservationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
