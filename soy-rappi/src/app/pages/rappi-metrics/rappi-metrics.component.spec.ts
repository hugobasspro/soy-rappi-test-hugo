import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiMetricsComponent } from './rappi-metrics.component';

describe('RappiMetricsComponent', () => {
  let component: RappiMetricsComponent;
  let fixture: ComponentFixture<RappiMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RappiMetricsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
