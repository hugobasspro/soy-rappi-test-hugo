import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnWithRappiComponent } from './earn-with-rappi.component';

describe('EarnWithRappiComponent', () => {
  let component: EarnWithRappiComponent;
  let fixture: ComponentFixture<EarnWithRappiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnWithRappiComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnWithRappiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
