import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { PageMappingService } from '../../services/page-mapping/page-mapping.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoutingGuard implements CanActivate {
  constructor(private pagesService: PageMappingService,
              private router: Router,
              private location: Location) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.pagesService.initialized) {
      return true;
    } else {
      return this.pagesService.getSiteLinks()
        .pipe(
          switchMap((res): Promise<boolean> => {
            return this.router.navigateByUrl(this.location.path(true));
          }),
        );
    }
  }
}
