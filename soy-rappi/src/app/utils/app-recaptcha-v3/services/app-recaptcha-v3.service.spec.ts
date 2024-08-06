import { TestBed } from '@angular/core/testing';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { RecaptchaV3Module, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

import { AppRecaptchaV3Service } from './app-recaptcha-v3.service';

describe('RecaptchaV3Service', () => {
  let service: AppRecaptchaV3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RecaptchaV3Module,
        BrowserTransferStateModule,
      ],
      providers: [
        {
          provide: RECAPTCHA_V3_SITE_KEY, useValue: '<YOUR_SITE_KEY>',
        },
      ],
    });
    service = TestBed.inject(AppRecaptchaV3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
