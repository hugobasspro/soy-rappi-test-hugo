import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagLocationsComponent } from './bag-locations.component';

describe('BagLocationsComponent', () => {
  let component: BagLocationsComponent;
  let fixture: ComponentFixture<BagLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagLocationsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
