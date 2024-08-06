import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestDescriptionComponent } from './contest-description.component';

describe('ContestDescriptionComponent', () => {
  let component: ContestDescriptionComponent;
  let fixture: ComponentFixture<ContestDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
