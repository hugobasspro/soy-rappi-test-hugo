import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCountryModalComponent } from './redirect-country-modal.component';

describe('RedirectCountryModalComponent', () => {
  let component: RedirectCountryModalComponent;
  let fixture: ComponentFixture<RedirectCountryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectCountryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectCountryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
