import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceHowCommunicateComponent } from './benefits-insurance-how-communicate.component';

describe('BenefitsInsuranceHowCommunicateComponent', () => {
  let component: BenefitsInsuranceHowCommunicateComponent;
  let fixture: ComponentFixture<BenefitsInsuranceHowCommunicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceHowCommunicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceHowCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
