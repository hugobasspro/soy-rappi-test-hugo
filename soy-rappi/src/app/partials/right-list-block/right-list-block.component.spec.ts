import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightListBlockComponent } from './right-list-block.component';

describe('RightListBlockComponent', () => {
  let component: RightListBlockComponent;
  let fixture: ComponentFixture<RightListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightListBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
