import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountAndCalendarComponent } from './bank-account-and-calendar.component';

describe('BankAccountAndCalendarComponent', () => {
  let component: BankAccountAndCalendarComponent;
  let fixture: ComponentFixture<BankAccountAndCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountAndCalendarComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountAndCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
