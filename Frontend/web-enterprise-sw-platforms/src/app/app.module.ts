import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EmployeePageComponent,
    ManagerPageComponent,
    AdminPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
