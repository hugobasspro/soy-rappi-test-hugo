import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewCaptureDetailsComponent } from './preview-capture-details.component';

describe('PreviewCaptureDetailsComponent', () => {
  let component: PreviewCaptureDetailsComponent;
  let fixture: ComponentFixture<PreviewCaptureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewCaptureDetailsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewCaptureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
