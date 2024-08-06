import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlogEntriesComponent } from './search-blog-entries.component';

describe('SearchBlogEntriesComponent', () => {
  let component: SearchBlogEntriesComponent;
  let fixture: ComponentFixture<SearchBlogEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBlogEntriesComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBlogEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
