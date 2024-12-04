import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmploiComponent } from './add-emploi/add-emploi.component';
import { ModifyEmploiComponent } from './modify-emploi/modify-emploi.component';
import { ListeEmploiComponent } from './liste-emploi/liste-emploi.component';
import { ToastrModule } from 'ngx-toastr'; 
import { FormsModule } from '@angular/forms';
import { EnseignantDashboardComponent } from './enseignant-dashboard/enseignant-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './settings/settings.component'; 


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddEmploiComponent,
    ModifyEmploiComponent,
    ListeEmploiComponent,
    EnseignantDashboardComponent,
    AdminDashboardComponent,
    SettingsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),  
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
