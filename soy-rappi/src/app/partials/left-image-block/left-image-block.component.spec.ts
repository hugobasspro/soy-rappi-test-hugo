import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageBlockComponent } from './left-image-block.component';

describe('LeftImageBlockComponent', () => {
  let component: LeftImageBlockComponent;
  let fixture: ComponentFixture<LeftImageBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftImageBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftImageBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
