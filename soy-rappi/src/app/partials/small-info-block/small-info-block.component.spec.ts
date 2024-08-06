import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallInfoBlockComponent } from './small-info-block.component';

describe('SmallInfoBlockComponent', () => {
  let component: SmallInfoBlockComponent;
  let fixture: ComponentFixture<SmallInfoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallInfoBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallInfoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
