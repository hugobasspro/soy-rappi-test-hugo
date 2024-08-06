import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriositiesCarouselComponent } from './curiosities-carousel.component';

describe('CuriositiesCarouselComponent', () => {
  let component: CuriositiesCarouselComponent;
  let fixture: ComponentFixture<CuriositiesCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuriositiesCarouselComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriositiesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
