import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMobileBlockComponent } from './welcome-mobile-block.component';

describe('WelcomeMobileBlockComponent', () => {
  let component: WelcomeMobileBlockComponent;
  let fixture: ComponentFixture<WelcomeMobileBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeMobileBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMobileBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
