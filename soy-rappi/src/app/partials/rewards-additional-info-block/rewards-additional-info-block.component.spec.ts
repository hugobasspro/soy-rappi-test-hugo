import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsAdditionalInfoBlockComponent } from './rewards-additional-info-block.component';

describe('RewardsAdditionalInfoBlockComponent', () => {
  let component: RewardsAdditionalInfoBlockComponent;
  let fixture: ComponentFixture<RewardsAdditionalInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsAdditionalInfoBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsAdditionalInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
