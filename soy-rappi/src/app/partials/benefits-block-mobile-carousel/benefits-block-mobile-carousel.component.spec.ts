import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsBlockMobileCarouselComponent } from './benefits-block-mobile-carousel.component';

describe('BenefitsBlockComponent', () => {
  let component: BenefitsBlockMobileCarouselComponent;
  let fixture: ComponentFixture<BenefitsBlockMobileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsBlockMobileCarouselComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsBlockMobileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
