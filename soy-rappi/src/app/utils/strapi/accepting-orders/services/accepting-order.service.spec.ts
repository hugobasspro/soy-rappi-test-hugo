import { TestBed } from '@angular/core/testing';

import { AcceptingOrderService } from './accepting-order.service';

describe('AcceptingOrderService', () => {
  let service: AcceptingOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptingOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
