import { TestBed } from '@angular/core/testing';

import { DisciplinaryMeasuresService } from './disciplinary-measures.service';

describe('DisciplinaryMeasuresService', () => {
  let service: DisciplinaryMeasuresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinaryMeasuresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
