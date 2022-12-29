import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Meetings } from "src/app/models/meetings";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const baseUrl = 'https://localhost:5001';

@Injectable()
export class ScheduleService {

    constructor(private httpClient: HttpClient) {
    }

    getMeetings(): Observable<Meetings[]> {
        return this.httpClient.get<Meetings[]>(`${baseUrl}/api/schedule/meetings`, httpOptions);
    }
}