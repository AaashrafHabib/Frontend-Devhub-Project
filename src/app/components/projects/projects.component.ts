import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { project } from '../modell/project';
import { consultant } from '../modell/consultant';
import { PrincipalService } from 'src/app/services/principal.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
    @Input() cardWidth: string = '1000px';
    @Input() cardheight: string = '500px';
    selectedConsultant: any ;
    selectedProject: any;
    projects!: project[];
    consultants!: consultant[];


    constructor(private principal_service : PrincipalService,private messageService: MessageService) {
    }
ngOnInit() {
    this.principal_service.getprojects2().subscribe(

        (response)=>{
            this.projects=response;

        }
      )
      this.principal_service.getconsultants().subscribe(

        (response)=>{
          this.consultants=response;
        }
       )
}
        assign() {
        if (this.selectedConsultant && this.selectedProject) {
            this.principal_service.assign(this.selectedConsultant,this.selectedProject).subscribe(
              (response)=>{
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'assignement successfully ' });

              }
            );

          //    this.principal_service.getprojects2().subscribe(
          //     (response)=>{
          //    this.projects=response;

          //  })
        }
    }
}
