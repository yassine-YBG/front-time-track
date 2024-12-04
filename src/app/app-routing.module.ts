import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmploiComponent } from './add-emploi/add-emploi.component';
import {ListeEmploiComponent} from './liste-emploi/liste-emploi.component'
import { ModifyEmploiComponent } from './modify-emploi/modify-emploi.component';
import { EnseignantDashboardComponent } from './enseignant-dashboard/enseignant-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  {path: 'addemploidutmeps', component:AddEmploiComponent},
  {path: 'liste-emploi',component:ListeEmploiComponent},
  { path: 'modify-emploi/:id', component: ModifyEmploiComponent },
  { path: 'enseignant-dashboard', component: EnseignantDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }, 
  {path: 'settings',component:SettingsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
