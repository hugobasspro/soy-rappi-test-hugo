import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsBlockNew } from './faqs-block-new.component';

describe('FaqsNewBlockComponent', () => {
  let component: FaqsBlockNew;
  let fixture: ComponentFixture<FaqsBlockNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsBlockNew ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsBlockNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
