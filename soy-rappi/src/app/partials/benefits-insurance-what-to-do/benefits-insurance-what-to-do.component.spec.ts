import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsInsuranceWhatToDoComponent } from './benefits-insurance-what-to-do.component';

describe('BenefitsInsuranceWhatToDoComponent', () => {
  let component: BenefitsInsuranceWhatToDoComponent;
  let fixture: ComponentFixture<BenefitsInsuranceWhatToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsInsuranceWhatToDoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsInsuranceWhatToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
