import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { TokenStorageService } from './services/token.storage.service';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeGuard } from './helpers/home.guard';
import { RegisterGuard } from './helpers/register.guard';
import { LoginGuard } from './helpers/login.guard';

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
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardModule
  ],
  providers: [AuthService, TokenStorageService, AuthGuard, HomeGuard, RegisterGuard, LoginGuard, authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
