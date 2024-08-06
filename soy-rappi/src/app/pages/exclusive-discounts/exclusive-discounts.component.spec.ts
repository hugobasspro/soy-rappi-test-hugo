import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusiveDiscountsComponent } from './exclusive-discounts.component';

describe('ExclusiveDiscountsComponent', () => {
  let component: ExclusiveDiscountsComponent;
  let fixture: ComponentFixture<ExclusiveDiscountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusiveDiscountsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusiveDiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
