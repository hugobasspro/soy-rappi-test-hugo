import { TestBed } from '@angular/core/testing';

import { SeoInformationService } from './seo-information.service';

describe('SeoInformationService', () => {
  let service: SeoInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
