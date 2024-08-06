import { TestBed } from '@angular/core/testing';

import { InformativeVideosService } from './informative-videos.service';

describe('InformativeVideosService', () => {
  let service: InformativeVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformativeVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
