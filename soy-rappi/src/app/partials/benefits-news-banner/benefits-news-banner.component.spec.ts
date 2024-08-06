import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsNewsBannerComponent } from './benefits-news-banner.component';

describe('BenefitsNewsBannerComponent', () => {
  let component: BenefitsNewsBannerComponent;
  let fixture: ComponentFixture<BenefitsNewsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsNewsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsNewsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
