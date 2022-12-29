import { Component, OnInit } from "@angular/core";
import { concatMap, map, mergeMap, switchMap, tap } from "rxjs";
import { Meetings } from "src/app/models/meetings";
import { ScheduleService } from "./schedule.service";

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    meetings: Meetings[] = [];

    constructor(private scheduleSvc: ScheduleService) {
    }

    ngOnInit(): void {
        this.scheduleSvc.getMeetings()
            .pipe(
                map(items => this.meetings = items))
            .subscribe();
    }
}