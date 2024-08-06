import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceInformFamilyComponent } from './benefits-insurance-inform-family.component';

describe('BenefitsInsuranceInformFamilyComponent', () => {
  let component: BenefitsInsuranceInformFamilyComponent;
  let fixture: ComponentFixture<BenefitsInsuranceInformFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceInformFamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceInformFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
