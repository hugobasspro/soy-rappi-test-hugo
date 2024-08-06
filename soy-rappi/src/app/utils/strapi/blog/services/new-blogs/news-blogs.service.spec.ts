import { TestBed } from '@angular/core/testing';

import { NewsBlogsService } from './news-blogs.service';

describe('NewsBlogsService', () => {
  let service: NewsBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
