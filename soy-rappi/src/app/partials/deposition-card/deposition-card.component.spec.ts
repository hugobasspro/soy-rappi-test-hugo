import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionCardComponent } from './deposition-card.component';

describe('DepositionCardComponent', () => {
  let component: DepositionCardComponent;
  let fixture: ComponentFixture<DepositionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositionCardComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
