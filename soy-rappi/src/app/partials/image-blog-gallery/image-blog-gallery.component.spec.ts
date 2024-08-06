import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBlogGalleryComponent } from './image-blog-gallery.component';

describe('ImageBlogGalleryComponent', () => {
  let component: ImageBlogGalleryComponent;
  let fixture: ComponentFixture<ImageBlogGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBlogGalleryComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBlogGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
