import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsLearnBannerComponent } from './benefits-learn-banner.component';

describe('BenefitsLearnBannerComponent', () => {
  let component: BenefitsLearnBannerComponent;
  let fixture: ComponentFixture<BenefitsLearnBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsLearnBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsLearnBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
