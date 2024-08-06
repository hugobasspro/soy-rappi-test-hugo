import { TestBed } from '@angular/core/testing';

import { WhatsappVerificationService } from './whatsapp-verification.service';

describe('WhatsappVerificationService', () => {
  let service: WhatsappVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatsappVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
