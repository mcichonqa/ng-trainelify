import { Injectable } from "@angular/core";
import { Location } from '@angular/common';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserTokenService } from "../services/user.token.service";

@Injectable()
export class UnauthGuard implements CanActivate{

    constructor(private userToken: UserTokenService, private router: Router, private location: Location) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(Object.keys(this.userToken.getUser()).length > 0){

            return false;
        }
        else{
            return true;
        }
    }
}