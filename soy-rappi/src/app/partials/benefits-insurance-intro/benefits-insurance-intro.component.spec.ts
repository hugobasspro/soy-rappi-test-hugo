import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceIntroComponent } from './benefits-insurance-intro.component';

describe('BenefitsInsuranceIntroComponent', () => {
  let component: BenefitsInsuranceIntroComponent;
  let fixture: ComponentFixture<BenefitsInsuranceIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
