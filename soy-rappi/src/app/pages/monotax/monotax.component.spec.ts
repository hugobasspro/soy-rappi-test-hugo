import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonotaxComponent } from './monotax.component';

describe('MonotaxComponent', () => {
  let component: MonotaxComponent;
  let fixture: ComponentFixture<MonotaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonotaxComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonotaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
