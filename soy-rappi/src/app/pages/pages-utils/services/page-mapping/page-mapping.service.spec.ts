import { TestBed } from '@angular/core/testing';

import { PageMappingService } from './page-mapping.service';

describe('PageMappingService', () => {
  let service: PageMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
