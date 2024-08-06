import {NgModule} from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios
// Componentes
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared/header/header.component';
import {SliderComponent} from './components/shared/slider/slider.component';
import {VideosComponent} from './components/shared/videos/videos.component';
import {NotasComponent} from './components/shared/notas/notas.component';
import {RequisitosComponent} from './components/shared/requisitos/requisitos.component';
import {FaqsComponent} from './components/shared/faqs/faqs.component';
import {FooterComponent} from './components/shared/footer/footer.component';
import {NotaComponent} from './components/nota/nota.component';
import {HomeComponent} from './components/home/home.component';
import {DomseguroPipe} from './pipes/domseguro.pipe';
import {SafehtmlPipe} from './pipes/safehtml.pipe';
import {TerminosComponent} from './components/terminos/terminos.component';
import {PrivacidadComponent} from './components/privacidad/privacidad.component';
import {TagManagerService} from "./services/tag-manager/services/tag-manager.service";
import {ServerSideRenderingService} from "./services/server-side-rendering/services/server-side-rendering.service";
import {tagManagerId} from "../environments/tag-manager/tag-manager";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    VideosComponent,
    NotasComponent,
    RequisitosComponent,
    FaqsComponent,
    FooterComponent,
    NotaComponent,
    HomeComponent,
    DomseguroPipe,
    SafehtmlPipe,
    TerminosComponent,
    PrivacidadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    ServerSideRenderingService,
    TagManagerService,
    { provide: 'googleTagManagerId', useValue: tagManagerId },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
