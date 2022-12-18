import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BehaviorSubject, filter, from, fromEvent, map, Observable, of, Subject } from "rxjs";

import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AuthGuard } from "./helpers/auth.guard";

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'register',
        component: RegisterComponent
        // canActivate: [AuthGuard],
        // data: {
        //     role: "Customer"
        // }
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