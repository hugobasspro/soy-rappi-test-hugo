import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightImageBlockComponent } from './right-image-block.component';

describe('RightImageBlockComponent', () => {
  let component: RightImageBlockComponent;
  let fixture: ComponentFixture<RightImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightImageBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
