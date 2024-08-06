import { TestBed } from '@angular/core/testing';

import { DynamicDataPageService } from './dynamic-page.service';

describe('DynamicPageService', () => {
  let service: DynamicDataPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicDataPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
