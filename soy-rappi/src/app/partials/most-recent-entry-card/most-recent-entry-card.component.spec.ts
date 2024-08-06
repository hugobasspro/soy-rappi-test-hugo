import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentEntryCardComponent } from './most-recent-entry-card.component';

describe('MostRecentEntryCardComponent', () => {
  let component: MostRecentEntryCardComponent;
  let fixture: ComponentFixture<MostRecentEntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostRecentEntryCardComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRecentEntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
