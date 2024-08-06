import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoColoredBlockComponent } from './small-info-colored-block.component';

describe('SmallInfoColoredBlockComponent', () => {
  let component: SmallInfoColoredBlockComponent;
  let fixture: ComponentFixture<SmallInfoColoredBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallInfoColoredBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallInfoColoredBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
