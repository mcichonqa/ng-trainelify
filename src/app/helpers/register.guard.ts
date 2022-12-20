import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { TokenStorageService } from "../services/token.storage.service";

@Injectable()
export class RegisterGuard implements CanActivate{

    constructor(private token: TokenStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(Object.keys(this.token.getUser()).length > 0){
            return false;
        }
        else{
            return true;
        }
    }
}