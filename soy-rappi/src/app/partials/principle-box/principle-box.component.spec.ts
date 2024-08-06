import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleBoxComponent } from './principle-box.component';

describe('PrincipleBoxComponent', () => {
  let component: PrincipleBoxComponent;
  let fixture: ComponentFixture<PrincipleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleBoxComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
