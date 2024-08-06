import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceComponent } from './benefits-insurance.component';

describe('BenefitsInsuranceComponent', () => {
  let component: BenefitsInsuranceComponent;
  let fixture: ComponentFixture<BenefitsInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
