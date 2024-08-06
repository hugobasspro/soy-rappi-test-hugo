import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
/* Recaptcha Services */
import { ReCaptchaV3Service, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { tagManagerId } from 'src/environments/tag-manager/tag-manager';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRecaptchaV3Service } from './utils/app-recaptcha-v3/services/app-recaptcha-v3.service';
/* END Recaptcha Services */
/* Util services that are needed on main app.component */
import { ServerSideRenderingService } from './utils/server-side-rendering/services/server-side-rendering.service';
import { TagManagerService } from './utils/tag-manager/services/tag-manager.service';
import { LayoutModule } from '@angular/cdk/layout';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoadContentService } from './utils/load-content/load-content.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationService } from './utils/location/location.service';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSelectModule } from '@angular/material/select';
/* END Util services that are needed on main app.component */

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule, // Import this module in the main component to allow StateTransfer to work!!
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    LayoutModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    CdkAccordionModule,
    MatSelectModule,
  ],
  providers: [
    ServerSideRenderingService,
    TagManagerService,
    { provide: 'googleTagManagerId', useValue: tagManagerId },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptchaV3Key },
    ReCaptchaV3Service,
    AppRecaptchaV3Service,
    LoadContentService,
    LocationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
