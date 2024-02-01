import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  items: MenuItem[] | undefined;
  constructor(private router: Router,private auth:AuthService) {}
  ngOnInit() {
   




if (this.auth.isLoggedInAdministrator()){
    this.items = [
        {
            label: 'Login ', routerLink:['/login'], 
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',routerLink:['/home']
            
        },
        {
            label: 'Users',
            icon: 'pi pi-fw pi-user',
            items: [
                {
                    label: 'Add Client', routerLink:['/home/addClient'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Add  Consultant',routerLink:['/home/addConsultant'],
                    icon: 'pi pi-fw pi-user-plus'
                },
                {
                    label: 'Add Administrateur',routerLink:['/home/addAdmin'],
                    icon: 'pi pi-fw pi-user-plus',
                    
                }, 
                // {
                //     label: 'Add Projects',routerLink:['/homeadmin/addProject'],
                //     icon: 'pi pi-fw pi-user-plus',
                   
                    
                // }
            ]
        },
        
       
    ];

}else if (this.auth.isLoggedInClient()){ 

    this.items = [
        {
            label: 'Login ', routerLink:['/login'], 
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',routerLink:['/home']
            
        },
        {
            label: 'add',
            icon: 'pi pi-fw pi-user',
            items: [
                 {
                    label: 'Add Projects',routerLink:['/home/addProject'],
                    icon: 'pi pi-fw pi-user-plus',
                   
                    
                }
            ]
        },
        
       
    ];


} else if (this.auth.isLoggedInConsultant()){

    
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
            label: 'view',
            icon: 'pi pi-fw pi-user',
            items: [
                 {
                    label: 'view Project status',routerLink:['/projectstatus'],
                    icon: 'pi pi-fw pi-user-plus',
                   
                    
                }
            ]
        },
        
       
    ];
}









  }
    logout() {
        localStorage.removeItem('access_token');
        console.log('sddsd'); 
      }
}
