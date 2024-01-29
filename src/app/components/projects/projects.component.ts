import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { project } from '../modell/project';
import { consultant } from '../modell/consultant';
import { PrincipalService } from 'src/app/services/principal.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

    selectedConsultant: any ;
    selectedProject: any;
    projects!: project[];
    consultants!: consultant[];
    @Output() assignProjectEvent = new EventEmitter<any>();


    constructor(private principal_service : PrincipalService) {
    }
ngOnInit(): void {
    this.principal_service.getprojects().subscribe(

        (response)=>{
            this.projects=response;
            console.log(this.projects);
        }
        
  )
      this.principal_service.getconsultants().subscribe(
  
        (response)=>{
          this.consultants=response;
        }
       )
}
    emit() {
        if (this.selectedConsultant && this.selectedProject) {
            this.principal_service.assign(this.selectedConsultant,this.selectedProject).subscribe( 
(response)=> { 
console.log("succes"); 

}


            )
            this.assignProjectEvent.emit({
                selectedConsultant: this.selectedConsultant,
                selectedProject: this.selectedProject
            });
        }
    }
}
