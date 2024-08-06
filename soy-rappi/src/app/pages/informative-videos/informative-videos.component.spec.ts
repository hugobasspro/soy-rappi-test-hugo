import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeVideosComponent } from './informative-videos.component';

describe('InformativeVideosComponent', () => {
  let component: InformativeVideosComponent;
  let fixture: ComponentFixture<InformativeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativeVideosComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformativeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
