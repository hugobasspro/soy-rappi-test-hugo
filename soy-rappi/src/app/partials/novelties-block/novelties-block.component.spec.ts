import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveltiesBlockComponent } from './novelties-block.component';

describe('NoveltiesBlockComponent', () => {
  let component: NoveltiesBlockComponent;
  let fixture: ComponentFixture<NoveltiesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoveltiesBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoveltiesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
