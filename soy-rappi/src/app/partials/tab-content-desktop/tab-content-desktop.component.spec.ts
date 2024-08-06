import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentDesktopComponent } from './tab-content-desktop.component';

describe('TabContentDesktopComponent', () => {
  let component: TabContentDesktopComponent;
  let fixture: ComponentFixture<TabContentDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabContentDesktopComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabContentDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
