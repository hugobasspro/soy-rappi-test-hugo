import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentEntriesBlockComponent } from './most-recent-entries-block.component';

describe('MostRecentEntriesBlockComponent', () => {
  let component: MostRecentEntriesBlockComponent;
  let fixture: ComponentFixture<MostRecentEntriesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRecentEntriesBlockComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentEntriesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
