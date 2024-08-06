import { TestBed } from '@angular/core/testing';

import { RappiMetricsService } from './rappi-metrics.service';

describe('RappiMetricsService', () => {
  let service: RappiMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappiMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
