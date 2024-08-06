import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOrdersGenericStepComponent } from './receive-orders-generic-step.component';

describe('ReceiveOrdersGenericStepComponent', () => {
  let component: ReceiveOrdersGenericStepComponent;
  let fixture: ComponentFixture<ReceiveOrdersGenericStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveOrdersGenericStepComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveOrdersGenericStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
