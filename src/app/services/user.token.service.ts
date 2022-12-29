import { Injectable } from "@angular/core";
import { BehaviorSubject, mergeMap, Observable, of } from "rxjs";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable()
export class UserTokenService {

    public authenticated = new BehaviorSubject<boolean>(false);
    public authenticated$: Observable<boolean>;

    constructor(){
        this.authenticated$ = this.authenticated.pipe(mergeMap(x => {
            if (Object.keys(this.getUser()).length > 0) {
                return of(true);
            }
            else {
                return of(false);
            }
        }));
    }

    signOut(): void {
        window.sessionStorage.clear();
    }

    getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);
        return user != null ? JSON.parse(user) : {};
    }

    saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
}