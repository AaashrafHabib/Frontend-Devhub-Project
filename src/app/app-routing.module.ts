import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AddClientComponent } from './components/Add/add-client/add-client.component';
import { AddConsultantComponent } from './components/Add/add-consultant/add-consultant.component';
import { AddAdministrateurComponent } from './components/Add/add-administrateur/add-administrateur.component';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeConsultantComponent } from './components/home-consultant/home-consultant.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AddProjectComponent } from './components/Add/add-project/add-project.component';
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  {path:'', redirectTo:'/login',pathMatch:'full'}, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'homeClient',
    component: HomeClientComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'homeConsultant',
    component: HomeConsultantComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  // {
  //   path: 'homeadmin',
  //   component: HomeComponent,
  //   canActivate: [authGuard]
  // },  

  { path:'homeadmin',
  canActivate: [authGuard], children: [ 
    {path:'', component:HomeComponent}, 
   {path:'addConsultant', component:AddConsultantComponent}, 
   {path:'addClient', component:AddClientComponent},
   {path:'addAdmin', component:AddAdministrateurComponent},
   {path:'addProject', component:AddProjectComponent},

  ]}, 
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
