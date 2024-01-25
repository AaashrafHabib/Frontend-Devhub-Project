import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddAdministrateurComponent } from './components/add-administrateur/add-administrateur.component';
import { AddConsultantComponent } from './components/add-consultant/add-consultant.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeConsultantComponent } from './components/home-consultant/home-consultant.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { MyformComponent } from './components/myform/myform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MenubarComponent,
    AddClientComponent,
    AddAdministrateurComponent,
    AddConsultantComponent,
    HomeClientComponent,
    HomeConsultantComponent,
    ProgressComponent,
    ForgotpasswordComponent,
    AddProjectComponent,
    MyformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule, 
    ButtonModule,HttpClientModule,ToastModule ,BrowserAnimationsModule, PasswordModule ,FormsModule,MenubarModule ,TreeSelectModule,TimelineModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
