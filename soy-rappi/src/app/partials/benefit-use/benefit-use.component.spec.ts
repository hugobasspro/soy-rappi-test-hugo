import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitUseComponent } from './benefit-use.component';

describe('BenefitUseComponent', () => {
  let component: BenefitUseComponent;
  let fixture: ComponentFixture<BenefitUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
