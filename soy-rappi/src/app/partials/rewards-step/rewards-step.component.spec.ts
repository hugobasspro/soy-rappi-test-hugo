import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsStepComponent } from './rewards-step.component';

describe('RewardsStepComponent', () => {
  let component: RewardsStepComponent;
  let fixture: ComponentFixture<RewardsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsStepComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
