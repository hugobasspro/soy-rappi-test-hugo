import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveStarsOrdersComponent } from './five-stars-orders.component';

describe('FiveStarsOrdersComponent', () => {
  let component: FiveStarsOrdersComponent;
  let fixture: ComponentFixture<FiveStarsOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiveStarsOrdersComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveStarsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
