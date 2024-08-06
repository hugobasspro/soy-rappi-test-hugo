import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsNewsRememberComponent } from './benefits-news-remember.component';

describe('BenefitsNewsRememberComponent', () => {
  let component: BenefitsNewsRememberComponent;
  let fixture: ComponentFixture<BenefitsNewsRememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsNewsRememberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsNewsRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
