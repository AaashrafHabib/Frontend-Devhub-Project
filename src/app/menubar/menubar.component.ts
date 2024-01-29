import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
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
            icon: 'pi pi-fw pi-home',routerLink:['/homeadmin']
            
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Add client', routerLink:['/homeadmin/addClient'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Add  consultant',routerLink:['/homeadmin/addConsultant'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Add-administrateur',routerLink:['/homeadmin/addAdmin'],
                    icon: 'pi pi-fw pi-user-plus',
                    // items: [
                    //     {
                    //         label: 'Filter',
                    //         icon: 'pi pi-fw pi-filter',
                    //         items: [
                    //             {
                    //                 label: 'Print',
                    //                 icon: 'pi pi-fw pi-print'
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         icon: 'pi pi-fw pi-bars',
                    //         label: 'List'
                    //     }
                    // ]
                }
            ]
        },
        {
            label: 'View Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Client Table', routerLink:['/homeadmin/addClient'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Consultant Table',routerLink:['/homeadmin/addConsultant'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Admin Table',routerLink:['/homeadmin/addAdmin'],
                    icon: 'pi pi-fw pi-user-plus',
                    // items: [
                    //     {
                    //         label: 'Filter',
                    //         icon: 'pi pi-fw pi-filter',
                    //         items: [
                    //             {
                    //                 label: 'Print',
                    //                 icon: 'pi pi-fw pi-print'
                    //             }
                    //         ]
                    //     },
                    //     {
                    //         icon: 'pi pi-fw pi-bars',
                    //         label: 'List'
                    //     }
                    // ]
                }
            ]
        },
        // {
        //     label: 'Quit',routerLink:['/login'], 
        //     icon: 'pi pi-fw pi-power-off', 
        //     command: () => {
        //         this.logout();
        //       }
        // }
    ];
  }
    logout() {
        localStorage.removeItem('access_token');
        console.log('sddsd'); 
        // Additional logic for handling the Quit action if needed
      }
}
