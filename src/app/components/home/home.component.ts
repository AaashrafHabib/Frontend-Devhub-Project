import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router,private auth:AuthService) {}
  
  ngOnInit() {

  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['login']);
    if(localStorage.getItem("client_username"))
    {
      localStorage.removeItem("client_username");
    }
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  } 


  isLoggedInAdministrator():boolean { 
    return this.auth.isLoggedInAdministrator() ; 
  }
  isLoggedInClient():boolean { 
    return this.auth.isLoggedInClient() ; 
  }
  isLoggedinConsultant():boolean {

    return this.auth.isLoggedInConsultant()
 ;  }
}
