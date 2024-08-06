import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { UsersService } from '../../users/services/users.service';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

const loginRoute = 'login';

@Injectable({
  providedIn: 'root',
})
export class IsAuthenticatedGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UsersService,
    private auth: AuthService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return combineLatest([this.userService.readMe(), this.auth.isAuthenticated])
      .pipe(
        map(value => {
          const isAuth = !!!value[0].err && !!value[0].data && !!value[0].data.id && !!value[1];
          if (isAuth) {
            return isAuth;
          } else {
            return this.cannotActivate(state);
          }
        }),
      );
  }

  cannotActivate(state: RouterStateSnapshot): boolean {
    this.router.navigate([loginRoute], { queryParams: {
      url: state.url,
    } }).then();
    return false;
  }
}
