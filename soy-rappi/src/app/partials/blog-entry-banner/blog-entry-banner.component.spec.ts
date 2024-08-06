import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogEntryBannerComponent } from './blog-entry-banner.component';

describe('BlogEntryBannerComponent', () => {
  let component: BlogEntryBannerComponent;
  let fixture: ComponentFixture<BlogEntryBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogEntryBannerComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
