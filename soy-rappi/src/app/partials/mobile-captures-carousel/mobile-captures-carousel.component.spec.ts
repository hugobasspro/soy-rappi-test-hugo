import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCapturesCarouselComponent } from './mobile-captures-carousel.component';

describe('MobileCapturesCarouselComponent', () => {
  let component: MobileCapturesCarouselComponent;
  let fixture: ComponentFixture<MobileCapturesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCapturesCarouselComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCapturesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
