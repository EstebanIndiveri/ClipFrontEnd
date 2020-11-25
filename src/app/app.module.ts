import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaService } from './services/persona.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OperationsComponent } from './components/operations/operations.component';
import { LoginComponent } from './components/login/login.component';
import { NotFountComponent } from './components/404/notfount.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonasComponent,
    SidebarComponent,
    DashboardComponent,
    ProfileComponent,
    OperationsComponent,
    LoginComponent,
  NotFountComponent,
  NewUserFormComponent,
  HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
