import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTextBlockComponent } from './title-text-block.component';

describe('TitleTextBlockComponent', () => {
  let component: TitleTextBlockComponent;
  let fixture: ComponentFixture<TitleTextBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleTextBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleTextBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
