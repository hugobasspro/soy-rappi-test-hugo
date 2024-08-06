import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeBlockComponent } from './vehicle-type-block.component';

describe('VehicleTypeBlockComponent', () => {
  let component: VehicleTypeBlockComponent;
  let fixture: ComponentFixture<VehicleTypeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
