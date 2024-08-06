import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStoryBlogEntryComponent } from './real-story-blog-entry.component';

describe('RealStoryBlogEntryComponent', () => {
  let component: RealStoryBlogEntryComponent;
  let fixture: ComponentFixture<RealStoryBlogEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStoryBlogEntryComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStoryBlogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
