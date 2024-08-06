import { TestBed } from '@angular/core/testing';

import { ExclusiveDiscountsService } from './exclusive-discounts.service';

describe('ExclusiveDiscountsService', () => {
  let service: ExclusiveDiscountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclusiveDiscountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
