import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBankGenericStepComponent } from './link-bank-generic-step.component';

describe('LinkBankGenericStepComponent', () => {
  let component: LinkBankGenericStepComponent;
  let fixture: ComponentFixture<LinkBankGenericStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBankGenericStepComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBankGenericStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
