import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMobileDialogComponent } from './welcome-mobile-dialog.component';

describe('WelcomeMobileDialogComponent', () => {
  let component: WelcomeMobileDialogComponent;
  let fixture: ComponentFixture<WelcomeMobileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeMobileDialogComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMobileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
