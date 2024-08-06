import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsAlwaysComponent } from './benefits-always.component';

describe('BenefitsAlwaysComponent', () => {
  let component: BenefitsAlwaysComponent;
  let fixture: ComponentFixture<BenefitsAlwaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsAlwaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsAlwaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
