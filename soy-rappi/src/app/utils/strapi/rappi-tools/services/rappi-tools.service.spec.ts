import { TestBed } from '@angular/core/testing';

import { RappiToolsService } from './rappi-tools.service';

describe('RappiToolsService', () => {
  let service: RappiToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RappiToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
