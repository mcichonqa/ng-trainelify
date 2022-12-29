import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ScheduleComponent } from "./schedule.component";
import { ScheduleRoutingModule } from "./schedule.routing.module";
import { ScheduleService } from "./schedule.service";

@NgModule({
    declarations: [ ScheduleComponent],
    imports: [ 
        ScheduleRoutingModule,
        CommonModule ],
    providers: [ ScheduleService ]
})
export class ScheduleModule{
}