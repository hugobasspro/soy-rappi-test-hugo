import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsNewsComponent } from './benefits-news.component';

describe('BenefitsNewsComponent', () => {
  let component: BenefitsNewsComponent;
  let fixture: ComponentFixture<BenefitsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
