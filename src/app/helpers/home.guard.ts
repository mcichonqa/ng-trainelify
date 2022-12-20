import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { TokenStorageService } from "../services/token.storage.service";

@Injectable()
export class HomeGuard implements CanActivate{

    constructor(private token: TokenStorageService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(Object.keys(this.token.getUser()).length > 0){
            return false;
        }
        else{
            return true;
        }
    }
}