import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsNewsRulesComponent } from './benefits-news-rules.component';

describe('BenefitsNewsRulesComponent', () => {
  let component: BenefitsNewsRulesComponent;
  let fixture: ComponentFixture<BenefitsNewsRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsNewsRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsNewsRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
