import { TestBed } from '@angular/core/testing';

import { WhoWeAreService } from './who-we-are.service';

describe('WhoWeAreService', () => {
  let service: WhoWeAreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhoWeAreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
