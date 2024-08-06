import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsLearnComponent } from './benefits-learn.component';

describe('BenefitsLearnComponent', () => {
  let component: BenefitsLearnComponent;
  let fixture: ComponentFixture<BenefitsLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
