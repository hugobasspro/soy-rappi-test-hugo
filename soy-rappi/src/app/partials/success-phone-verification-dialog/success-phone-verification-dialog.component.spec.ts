import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPhoneVerificationDialogComponent } from './success-phone-verification-dialog.component';

describe('SuccessPhoneVerificationDialogComponent', () => {
  let component: SuccessPhoneVerificationDialogComponent;
  let fixture: ComponentFixture<SuccessPhoneVerificationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessPhoneVerificationDialogComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPhoneVerificationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
