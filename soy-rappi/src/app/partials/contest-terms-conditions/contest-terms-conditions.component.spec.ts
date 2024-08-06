import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestTermsConditionsComponent } from './contest-terms-conditions.component';

describe('ContestTermsConditionsComponent', () => {
  let component: ContestTermsConditionsComponent;
  let fixture: ComponentFixture<ContestTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestTermsConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
