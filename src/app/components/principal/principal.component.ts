import {Component, OnInit} from '@angular/core';
import {project} from "../modell/project";
import {consultant} from "../modell/consultant";
import {PrincipalService} from "../../services/principal.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{
  projects!: project[];
  consultants!: consultant[];
  selectedConsultant!: consultant | undefined ;
  selectedProject!: project | undefined  ;


  constructor( private principal_service : PrincipalService ) {
  }

  ngOnInit() {
    this.principal_service.getprojects().subscribe(

      (response)=>{
        for (let proj in response){
        console.log(response[proj]);
         if(response[proj].consultant==null){
        this.projects.push(response[proj]);       
      }
        }
      }
)
    this.principal_service.getconsultants().subscribe(

      (response)=>{
        this.consultants=response
      }


    )
    }

  assignProject (event: { selectedConsultant:any, selectedProject:any }): void {

    this.principal_service.assign(this.selectedConsultant,this.selectedProject);
  }

}
