import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMultimediaBlockComponent } from './right-multimedia-block.component';

describe('RightMultimediaBlockComponent', () => {
  let component: RightMultimediaBlockComponent;
  let fixture: ComponentFixture<RightMultimediaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightMultimediaBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMultimediaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
