import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsPartnersComponent } from './benefits-partners.component';

describe('BenefitsPartnersComponent', () => {
  let component: BenefitsPartnersComponent;
  let fixture: ComponentFixture<BenefitsPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
