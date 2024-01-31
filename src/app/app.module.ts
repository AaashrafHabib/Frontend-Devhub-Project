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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { TimelineModule } from 'primeng/timeline';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';
import { AddClientComponent } from './components/Add/add-client/add-client.component';
import { AddAdministrateurComponent } from './components/Add/add-administrateur/add-administrateur.component';
import { AddConsultantComponent } from './components/Add/add-consultant/add-consultant.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { HomeClientComponent } from './components/home-client/home-client.component';
import { HomeConsultantComponent } from './components/home-consultant/home-consultant.component';
import { ProgressComponent } from './components/progress/progress.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { AddProjectComponent } from './components/Add/add-project/add-project.component';
import { MyformComponent } from './components/myform/myform.component';
import { CardComponent } from './components/card/card.component';
import { TableModule } from 'primeng/table';
import { FeedsComponent } from './components/feeds/feeds.component';
import { ProgressBarModule } from 'primeng/progressbar'; 
import { PrincipalComponent } from './components/principal/principal.component';
import { TableComponent } from './components/table/table.component';
import { ProjectsComponent} from './components/projects/projects.component';
 import { DropdownModule } from 'primeng/dropdown';
 import { TreeTableModule } from 'primeng/treetable';
import { TableClientComponent } from './views/table-client/table-client.component';
import { TableConsultantComponent } from './views/table-consultant/table-consultant.component';
import { TableProjectComponent } from './views/table-project/table-project.component';
import { ViewComponent } from './views/view/view.component';
import { ChartComponent } from './components/chart/chart.component';
import { ChartModule } from 'primeng/chart';
import { ChartV2Component } from './components/chart-v2/chart-v2.component';
import { AuthInterceptor } from './interceptors/token_interceptor';

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
    CardComponent,
    FeedsComponent, 
    PrincipalComponent, 
    TableComponent,
    ProjectsComponent, TableClientComponent, TableConsultantComponent, TableProjectComponent, ViewComponent, ChartComponent, ChartV2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule, 
    ButtonModule,TableModule, ProgressBarModule,DropdownModule,TreeTableModule,ChartModule
    ,HttpClientModule,ToastModule ,BrowserAnimationsModule, PasswordModule ,FormsModule,MenubarModule ,TreeSelectModule,TimelineModule
  ],
  providers: [MessageService,
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //    useClass: AuthInterceptor,
    //    multi: true,
    //  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
