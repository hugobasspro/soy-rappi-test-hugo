import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureBannerComponent } from './insure-banner.component';

describe('InsureBannerComponent', () => {
  let component: InsureBannerComponent;
  let fixture: ComponentFixture<InsureBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsureBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
