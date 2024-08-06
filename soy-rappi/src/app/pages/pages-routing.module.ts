import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

/*
 Where ara all the pages routing?
 Because the natural behaviour of a slug based application and SEO friendly pages where the URL
 can be adjusted on the CMS, the route is built at runtime with the following high level flow:
 1- Routing guard at: app-routing.module.ts -> canActivate: [ RoutingGuard ]
 2- The guard will try to initialize the routing from the CMS, if already initialized just let it flow
 3- Route and its components are mapped at src/app/pages/pages-utils/services/page-mapping/page-mapping.service.ts
 4- At the end of the process, in the same file of 3rd step, a reconfigureRouter is called to set Angular new router
 5- Going back to the routing guard, it allows a normal flow again with the ready router
 */
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
