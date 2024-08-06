import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceAlsoComponent } from './benefits-insurance-also.component';

describe('BenefitsInsuranceAlsoComponent', () => {
  let component: BenefitsInsuranceAlsoComponent;
  let fixture: ComponentFixture<BenefitsInsuranceAlsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceAlsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceAlsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
