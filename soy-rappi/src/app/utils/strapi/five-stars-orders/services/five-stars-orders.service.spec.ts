import { TestBed } from '@angular/core/testing';

import { FiveStarsOrdersService } from './five-stars-orders.service';

describe('FiveStarsOrdersService', () => {
  let service: FiveStarsOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveStarsOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
