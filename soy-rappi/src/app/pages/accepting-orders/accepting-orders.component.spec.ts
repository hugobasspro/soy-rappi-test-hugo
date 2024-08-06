import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptingOrdersComponent } from './accepting-orders.component';

describe('AcceptingOrdersComponent', () => {
  let component: AcceptingOrdersComponent;
  let fixture: ComponentFixture<AcceptingOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptingOrdersComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
