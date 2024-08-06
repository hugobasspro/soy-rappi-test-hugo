import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsBannerComponent } from './benefits-banner.component';

describe('BenefitsBannerComponent', () => {
  let component: BenefitsBannerComponent;
  let fixture: ComponentFixture<BenefitsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
