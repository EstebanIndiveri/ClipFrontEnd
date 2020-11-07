import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
    path:'**',pathMatch:'full',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
