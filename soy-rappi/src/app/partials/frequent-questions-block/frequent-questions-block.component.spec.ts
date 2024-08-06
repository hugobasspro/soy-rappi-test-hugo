import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentQuestionsBlockComponent } from './frequent-questions-block.component';

describe('FrequentQuestionsBlockComponent', () => {
  let component: FrequentQuestionsBlockComponent;
  let fixture: ComponentFixture<FrequentQuestionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequentQuestionsBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentQuestionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
