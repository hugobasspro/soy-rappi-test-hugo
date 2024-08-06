import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsLearnVideosComponent } from './benefits-learn-videos.component';

describe('BenefitsLearnVideosComponent', () => {
  let component: BenefitsLearnVideosComponent;
  let fixture: ComponentFixture<BenefitsLearnVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsLearnVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsLearnVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
