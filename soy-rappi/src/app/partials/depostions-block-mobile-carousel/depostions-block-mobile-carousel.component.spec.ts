import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsBlockMobileCarouselComponent } from './depostions-block-mobile-carousel.component';

describe('DepositionsBlockComponent', () => {
  let component: DepositionsBlockMobileCarouselComponent;
  let fixture: ComponentFixture<DepositionsBlockMobileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositionsBlockMobileCarouselComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositionsBlockMobileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
