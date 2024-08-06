import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsWeeklyComponent } from './benefits-weekly.component';

describe('BenefitsWeeklyComponent', () => {
  let component: BenefitsWeeklyComponent;
  let fixture: ComponentFixture<BenefitsWeeklyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsWeeklyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
