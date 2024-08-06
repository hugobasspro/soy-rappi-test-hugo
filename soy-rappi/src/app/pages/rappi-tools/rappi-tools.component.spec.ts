import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappiToolsComponent } from './rappi-tools.component';

describe('RappiToolsComponent', () => {
  let component: RappiToolsComponent;
  let fixture: ComponentFixture<RappiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RappiToolsComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
