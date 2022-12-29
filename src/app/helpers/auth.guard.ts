import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserTokenService } from "../services/user.token.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

    constructor(private userToken: UserTokenService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        let token = this.userToken.getToken();

        if (token){
            const userRole = this.userToken.getUser().role;

            if (route.data["role"] && route.data['role'].indexOf(userRole) === -1) {
              this.router.navigate(['/home']);

              return false;
            }

            return true;
          }
      
          this.router.navigate(['/home']);

          return false;
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.canActivate(next, state);
    }

    canDeactivate(
        component: unknown,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return true;
    }

    canLoad(
        route: Route,
        segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return true;
    }
}