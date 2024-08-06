import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceFaqComponent } from './benefits-insurance-faq.component';

describe('BenefitsInsuranceFaqComponent', () => {
  let component: BenefitsInsuranceFaqComponent;
  let fixture: ComponentFixture<BenefitsInsuranceFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
