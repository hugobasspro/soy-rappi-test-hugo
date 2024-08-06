import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PartialsModule } from './partials/partials.module';
import { PagesModule } from './pages/pages.module';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { TagManagerService } from './utils/tag-manager/services/tag-manager.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PagesModule,
        PartialsModule,
        BrowserTransferStateModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: 'googleTagManagerId',  useValue: 'GTM-XXXXXX' },
        TagManagerService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
