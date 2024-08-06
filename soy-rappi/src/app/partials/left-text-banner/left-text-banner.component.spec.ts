import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftTextBannerComponent } from './left-text-banner.component';

describe('LeftTextBannerComponent', () => {
  let component: LeftTextBannerComponent;
  let fixture: ComponentFixture<LeftTextBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftTextBannerComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftTextBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
