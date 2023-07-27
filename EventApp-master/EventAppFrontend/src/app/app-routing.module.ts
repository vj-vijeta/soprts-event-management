import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from './popup/popup.component';
import { ProfileComponent } from './profile/profile.component';
import { StartComponent } from './start/start.component';
import { St2Component } from './st2/st2.component';
const routes: Routes = [
  
  { path: '', component: StartComponent },
  { path: 'st2', component: St2Component },
  {path:'home',component:HomeComponent},
  //{ path: '', component: HomeComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
