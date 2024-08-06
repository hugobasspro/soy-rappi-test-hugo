import { TestBed } from '@angular/core/testing';

import { BankAccountAndCalendarService } from './bank-account-and-calendar.service';

describe('BankAccountAndCalendarService', () => {
  let service: BankAccountAndCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAccountAndCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
