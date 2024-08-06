import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneRegistrationDialogComponent } from './phone-registration-dialog.component';

describe('PhoneRegistrationDialogComponent', () => {
  let component: PhoneRegistrationDialogComponent;
  let fixture: ComponentFixture<PhoneRegistrationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneRegistrationDialogComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneRegistrationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
