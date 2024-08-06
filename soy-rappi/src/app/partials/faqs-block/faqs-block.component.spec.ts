import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqsBlockComponent } from './faqs-block.component';

describe('FaqsBlockComponent', () => {
  let component: FaqsBlockComponent;
  let fixture: ComponentFixture<FaqsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
