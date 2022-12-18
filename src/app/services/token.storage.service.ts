import { Injectable } from "@angular/core";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable()
export class TokenStorageService {

    signOut(): void {
        window.sessionStorage.clear();
    }

    saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY);

        if (user) {
            return JSON.parse(user);
        }

        return {};
    }
}