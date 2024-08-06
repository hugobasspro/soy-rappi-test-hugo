import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsDeliverymanComponent } from './benefits-deliveryman.component';

describe('BenefitsDeliverymanComponent', () => {
  let component: BenefitsDeliverymanComponent;
  let fixture: ComponentFixture<BenefitsDeliverymanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsDeliverymanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsDeliverymanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
