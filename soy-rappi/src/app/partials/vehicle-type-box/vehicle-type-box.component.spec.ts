import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeBoxComponent } from './vehicle-type-box.component';

describe('VehicleTypeBoxComponent', () => {
  let component: VehicleTypeBoxComponent;
  let fixture: ComponentFixture<VehicleTypeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeBoxComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
