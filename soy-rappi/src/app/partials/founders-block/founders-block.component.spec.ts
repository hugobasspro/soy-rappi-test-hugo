import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersBlockComponent } from './founders-block.component';

describe('FoundersBlockComponent', () => {
  let component: FoundersBlockComponent;
  let fixture: ComponentFixture<FoundersBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundersBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
