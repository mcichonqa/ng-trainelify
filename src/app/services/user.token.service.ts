import { Injectable } from "@angular/core";
import { BehaviorSubject, mergeMap, of } from "rxjs";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable()
export class UserTokenService {

    public authenticated = new BehaviorSubject<boolean>(this.defaultAuthenticatedValue());
    public authenticated$ = this.authenticated.asObservable();

    defaultAuthenticatedValue(): boolean{
        return Object.keys(this.getUser()).length > 0 ? true : false;
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