import { TestBed } from '@angular/core/testing';

import { RewaredsService } from './rewareds.service';

describe('RewaredsService', () => {
  let service: RewaredsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewaredsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
