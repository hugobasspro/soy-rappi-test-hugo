import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsNewsWhereComponent } from './benefits-news-where.component';

describe('BenefitsNewsWhereComponent', () => {
  let component: BenefitsNewsWhereComponent;
  let fixture: ComponentFixture<BenefitsNewsWhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsNewsWhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsNewsWhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
