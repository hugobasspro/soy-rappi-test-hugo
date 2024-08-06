import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsNewsShoppingCentersComponent } from './benefits-news-shopping-centers.component';

describe('BenefitsNewsShoppingCentersComponent', () => {
  let component: BenefitsNewsShoppingCentersComponent;
  let fixture: ComponentFixture<BenefitsNewsShoppingCentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsNewsShoppingCentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsNewsShoppingCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
