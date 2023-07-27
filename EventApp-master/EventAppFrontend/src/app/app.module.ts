import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from "@angular/common/http";
import { PopupComponent } from './popup/popup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePipe } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { StartComponent } from './start/start.component';
import { Admin1Component } from './admin1/admin1.component';
import { St2Component } from './st2/st2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopupComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    AdminComponent,
    StartComponent,
    Admin1Component,
    St2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePipe
  ],
  exports:[
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
