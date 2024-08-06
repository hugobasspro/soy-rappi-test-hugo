import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceBannerComponent } from './benefits-insurance-banner.component';

describe('BenefitsInsuranceBannerComponent', () => {
  let component: BenefitsInsuranceBannerComponent;
  let fixture: ComponentFixture<BenefitsInsuranceBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
