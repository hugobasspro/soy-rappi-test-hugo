import { TestBed } from '@angular/core/testing';

import { WhatYouHaveService } from './what-you-have-to-know.service';

describe('WhatYouHaveService', () => {
  let service: WhatYouHaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatYouHaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
