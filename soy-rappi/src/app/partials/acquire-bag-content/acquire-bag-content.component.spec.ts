import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquireBagContentComponent } from './acquire-bag-content.component';

describe('AcquireBagContentComponent', () => {
  let component: AcquireBagContentComponent;
  let fixture: ComponentFixture<AcquireBagContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquireBagContentComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquireBagContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
