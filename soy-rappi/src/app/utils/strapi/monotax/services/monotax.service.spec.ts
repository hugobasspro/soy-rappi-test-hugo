import { TestBed } from '@angular/core/testing';
import { MonotaxService } from './monotax.service';


describe('MonotaxService', () => {
  let service: MonotaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonotaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
