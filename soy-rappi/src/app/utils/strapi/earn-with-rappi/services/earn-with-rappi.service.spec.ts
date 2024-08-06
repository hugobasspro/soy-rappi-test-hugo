import { TestBed } from '@angular/core/testing';
import { EarnWithRappiService } from './earn-with-rappi.service';


describe('EarnWithRappiService', () => {
  let service: EarnWithRappiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarnWithRappiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
