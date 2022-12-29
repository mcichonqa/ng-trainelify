import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { IdentityService } from './services/identity.service';
import { UserTokenService } from './services/user.token.service';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UnauthGuard } from './helpers/unauth.guard';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardModule,
    ScheduleModule
  ],
  exports: [ SidebarComponent],
  providers: [IdentityService, UserTokenService, AuthGuard, UnauthGuard, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
