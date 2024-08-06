import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStoryBlockComponent } from './real-story-block.component';

describe('RealStoryBlockComponent', () => {
  let component: RealStoryBlockComponent;
  let fixture: ComponentFixture<RealStoryBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStoryBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealStoryBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
