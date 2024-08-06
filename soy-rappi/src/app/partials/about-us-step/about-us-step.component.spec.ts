import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsStepComponent } from './about-us-step.component';

describe('AboutUsStepComponent', () => {
  let component: AboutUsStepComponent;
  let fixture: ComponentFixture<AboutUsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsStepComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
