import { Component ,Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-projectstatus',
  templateUrl: './projectstatus.component.html',
  styleUrls: ['./projectstatus.component.css']
})
export class ProjectstatusComponent implements OnInit {
  @Input() cardWidth: string = '1000px';
  @Input() cardheight: string = '800px';
  projects: any[] = [];
  statusMenu: MenuItem[] | undefined;
  constructor(private auth:AuthService){ }
  ngOnInit(): void {

    this.auth.getProjectsbyClientUsername(this.auth.getUsername()).subscribe( 
(response)=> { 
  this.projects=response; 
console.log(this.projects);
}

    )
  this.statusMenu  = [
      {
        label: 'Not Started',
        icon: 'pi pi-circle-off',
        styleClass: 'not-started-icon',
      },
      {
        label: 'In Progress',
        icon: 'pi pi-spinner',
        styleClass: 'in-progress-icon',
      },
      {
        label: 'Done',
        icon: 'pi pi-check',
        styleClass: 'done-icon',
      },
    ];
  } 
  getIconClass(status: string): string {
    switch (status) {
      case status="Not Started":
        return 'pi pi-circle-off'; // Icon for Not Started
      case status="In Progress":
        return 'pi pi-spinner'; // Icon for In Progress
      case status="Done":
        return 'pi pi-check'; // Icon for Done
      default:
        return ''; // Default icon, adjust as needed
    }
  }
} 