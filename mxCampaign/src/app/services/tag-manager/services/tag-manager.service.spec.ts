import { TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { TagManagerService } from './tag-manager.service';

describe('TagManagerService', () => {
  let service: TagManagerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserTransferStateModule,
      ],
      providers: [
        {
          provide: 'googleTagManagerId', useValue: 'GTM-XXXXXX',
        },
      ],
    });
    service = TestBed.inject(TagManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
