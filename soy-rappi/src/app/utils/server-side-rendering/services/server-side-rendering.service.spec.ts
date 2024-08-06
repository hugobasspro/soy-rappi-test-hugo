import { TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';

import { ServerSideRenderingService } from './server-side-rendering.service';

describe('ServerSideRenderingService', () => {
  let service: ServerSideRenderingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserTransferStateModule,
      ],
    });
    service = TestBed.inject(ServerSideRenderingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
