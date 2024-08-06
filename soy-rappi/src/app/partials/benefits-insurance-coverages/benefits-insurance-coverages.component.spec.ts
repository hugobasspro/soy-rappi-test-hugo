import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceCoveragesComponent } from './benefits-insurance-coverages.component';

describe('BenefitsInsuranceCoveragesComponent', () => {
  let component: BenefitsInsuranceCoveragesComponent;
  let fixture: ComponentFixture<BenefitsInsuranceCoveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceCoveragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceCoveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
