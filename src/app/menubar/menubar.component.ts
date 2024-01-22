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
            icon: 'pi pi-fw pi-home',
            
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Add client', routerLink:['/addClient'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Add  consultant',routerLink:['/addConsultant'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Add-administrateur',routerLink:['/addAdmin'],
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
            label: 'Events',
            icon: 'pi pi-fw pi-calendar',
            items: [
                {
                    label: 'Edit',
                    icon: 'pi pi-fw pi-pencil',
                    items: [
                        {
                            label: 'Save',
                            icon: 'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label: 'Delete',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                },
                {
                    label: 'Archieve',
                    icon: 'pi pi-fw pi-calendar-times',
                    items: [
                        {
                            label: 'Remove',
                            icon: 'pi pi-fw pi-calendar-minus'
                        }
                    ]
                }
            ]
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off'
        }
    ];
}
}
