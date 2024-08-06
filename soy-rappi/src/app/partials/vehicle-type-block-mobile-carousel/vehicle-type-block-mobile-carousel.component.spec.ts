import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTypeBlockMobileCarouselComponent } from './vehicle-type-block-mobile-carousel.component';

describe('VehicleTypeBlockComponent', () => {
  let component: VehicleTypeBlockMobileCarouselComponent;
  let fixture: ComponentFixture<VehicleTypeBlockMobileCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleTypeBlockMobileCarouselComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTypeBlockMobileCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
