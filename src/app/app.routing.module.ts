import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BehaviorSubject, filter, from, fromEvent, map, Observable, of, Subject } from "rxjs";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthGuard } from "./helpers/auth.guard";
import { UnauthGuard } from "./helpers/unauth.guard";

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        data: { role: 'Customer' }
    },
    {
        path: 'schedule', loadChildren: () => import('./modules/schedule/schedule.module').then(m => m.ScheduleModule),
        canActivate: [AuthGuard],
        data: { role: 'Customer' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}