import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbTabsBlockComponent } from './breadcrumb-tabs-block.component';

describe('BreadcrumbTabsBlockComponent', () => {
  let component: BreadcrumbTabsBlockComponent;
  let fixture: ComponentFixture<BreadcrumbTabsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbTabsBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbTabsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
