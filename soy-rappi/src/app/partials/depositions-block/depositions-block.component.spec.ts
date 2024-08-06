import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsBlockComponent } from './depositions-block.component';

describe('DepositionsBlockComponent', () => {
  let component: DepositionsBlockComponent;
  let fixture: ComponentFixture<DepositionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositionsBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
