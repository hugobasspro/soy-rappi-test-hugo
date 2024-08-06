import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopIconBoxComponent } from './top-icon-box.component';

describe('TopIconBoxComponent', () => {
  let component: TopIconBoxComponent;
  let fixture: ComponentFixture<TopIconBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopIconBoxComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopIconBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
