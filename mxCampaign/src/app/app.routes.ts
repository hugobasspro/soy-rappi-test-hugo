import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotaComponent } from './components/nota/nota.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { PrivacidadComponent } from './components/privacidad/privacidad.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nota/:slug', component: NotaComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'privacidad', component: PrivacidadComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true, scrollPositionRestoration: 'enabled'});
