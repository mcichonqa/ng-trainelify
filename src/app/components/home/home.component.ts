import { Component, OnDestroy } from "@angular/core";
import { concat, concatAll, concatMap, delay, filter, from, interval, map, merge, mergeMap, Observable, of, pipe, scheduled, Subscription, switchMap, take, tap, timer } from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}