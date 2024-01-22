import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit{
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
}
