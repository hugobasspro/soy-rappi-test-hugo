import { TestBed } from '@angular/core/testing';

import { BlogCategoriesService } from './blog-categories.service';

describe('BlogCategoriesService', () => {
  let service: BlogCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
