import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersBoxComponent } from './founders-box.component';

describe('FoundersBoxComponent', () => {
  let component: FoundersBoxComponent;
  let fixture: ComponentFixture<FoundersBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundersBoxComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
