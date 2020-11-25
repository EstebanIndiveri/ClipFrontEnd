import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFountComponent } from './components/404/notfount.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { OperationsComponent } from './components/operations/operations.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [{
  path:'',
  component:DashboardComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'operations',
    component:OperationsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:NewUserFormComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'**',pathMatch:'full',component:NotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
