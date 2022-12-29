import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const baseUrl = 'https://localhost:5051';

@Injectable()
export class IdentityService {

    constructor(private _httpClient: HttpClient) {
    }

    login(username: string, password: string): Observable<any> {
        return this._httpClient.post(
            `${baseUrl}/api/identity/login`,
            { userName: username, password: password },
            { responseType: 'text' });
    }

    register(username: string, password: string, email: string, surname: string, givenName: string, gender: string, birthDate: Date, role: string): Observable<any> {
        return this._httpClient.post(
            `${baseUrl}/api/identity/register`,
            { userName: username, password: password, email: email, surname: surname, givenName: givenName, gender: gender, birthDate: birthDate, role: role },
            { responseType: 'text' })
    }
}