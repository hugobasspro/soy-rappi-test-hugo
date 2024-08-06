import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveltyCardComponent } from './novelty-card.component';

describe('NoveltyCardComponent', () => {
  let component: NoveltyCardComponent;
  let fixture: ComponentFixture<NoveltyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoveltyCardComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveltyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
