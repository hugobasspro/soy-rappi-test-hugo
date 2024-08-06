import { TestBed } from '@angular/core/testing';

import { DynamicPageService } from './dynamic-page.service';

describe('DynamicPageService', () => {
  let service: DynamicPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
