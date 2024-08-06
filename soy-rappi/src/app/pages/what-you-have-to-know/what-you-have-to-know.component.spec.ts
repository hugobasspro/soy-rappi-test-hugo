import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouHaveToKnowComponent } from './what-you-have-to-know.component';

describe('WhatYouHaveToKnowComponent', () => {
  let component: WhatYouHaveToKnowComponent;
  let fixture: ComponentFixture<WhatYouHaveToKnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatYouHaveToKnowComponent ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatYouHaveToKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
