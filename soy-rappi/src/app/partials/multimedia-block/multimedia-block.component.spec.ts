import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaBlockComponent } from './multimedia-block.component';

describe('MultimediaBlockComponent', () => {
  let component: MultimediaBlockComponent;
  let fixture: ComponentFixture<MultimediaBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultimediaBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultimediaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
