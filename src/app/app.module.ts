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
import { TryComponent } from './try/try.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { AddAdministrateurComponent } from './components/add-administrateur/add-administrateur.component';
import { AddConsultantComponent } from './components/add-consultant/add-consultant.component';
import { TreeSelectModule } from 'primeng/treeselect';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TryComponent,
    MenubarComponent,
    AddClientComponent,
    AddAdministrateurComponent,
    AddConsultantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule, 
    ButtonModule,HttpClientModule,ToastModule ,BrowserAnimationsModule, PasswordModule ,FormsModule,MenubarModule ,TreeSelectModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
