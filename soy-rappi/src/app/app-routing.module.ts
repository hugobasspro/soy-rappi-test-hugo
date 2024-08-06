import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RoutingGuard } from './pages/pages-utils/guard/routing/routing.guard';
import { PagesModule } from './pages/pages.module';
import { BenefitsInsuranceComponent } from './pages/benefits-insurance/benefits-insurance.component';
import { BenefitsLearnComponent } from './pages/benefits-learn/benefits-learn.component';
import { BenefitsNewsComponent } from './pages/benefits-news/benefits-news.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ RoutingGuard ],
    children: [
      {
        path: '',
        component: PagesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: NoPreloading,
    initialNavigation: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
