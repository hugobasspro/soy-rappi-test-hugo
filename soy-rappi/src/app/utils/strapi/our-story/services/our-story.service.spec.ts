import { TestBed } from '@angular/core/testing';
import { OurStoryService } from './our-story.service';


describe('OurStoryService', () => {
  let service: OurStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
