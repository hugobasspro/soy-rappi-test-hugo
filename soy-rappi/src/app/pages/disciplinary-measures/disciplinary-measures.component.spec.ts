import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaryMeasuresComponent } from './disciplinary-measures.component';

describe('DisciplinaryMeasuresComponent', () => {
  let component: DisciplinaryMeasuresComponent;
  let fixture: ComponentFixture<DisciplinaryMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinaryMeasuresComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaryMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
