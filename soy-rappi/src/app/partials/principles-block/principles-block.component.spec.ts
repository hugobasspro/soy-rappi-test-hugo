import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplesBlockComponent } from './principles-block.component';

describe('PrinciplesBlockComponent', () => {
  let component: PrinciplesBlockComponent;
  let fixture: ComponentFixture<PrinciplesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinciplesBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinciplesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
