import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContentMobileCarouselComponent } from './top-content-mobile-carousel.component';

describe('TopContentMobileCarouselComponent', () => {
  let component: TopContentMobileCarouselComponent;
  let fixture: ComponentFixture<TopContentMobileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopContentMobileCarouselComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopContentMobileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
