import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionBlockComponent } from './call-to-action-block.component';

describe('CallToActionBlockComponent', () => {
  let component: CallToActionBlockComponent;
  let fixture: ComponentFixture<CallToActionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallToActionBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
