import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-consultant',
  templateUrl: './home-consultant.component.html',
  styleUrls: ['./home-consultant.component.css']
})
export class HomeConsultantComponent {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {}
  ngOnInit() {
    this.items = [
        {
            label: 'Login ', routerLink:['/login'], 
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            
        },
        {
            label: 'Projects Status', routerLink:['/progress'], 
            icon: 'pi pi-fw pi-chart-line',
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}

logout() {
    localStorage.removeItem('access_token');
    console.log('a'); 
  }
}
