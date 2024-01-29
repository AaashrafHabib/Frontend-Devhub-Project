import {Component, Input, OnInit} from '@angular/core';
import {project} from "../modell/project";
import {consultant} from "../modell/consultant";
import {projectall} from "../modell/projectall";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() selectedproject!: project ;
  @Input() selectedconsultant!: consultant ;
  projectsall!: projectall[] ;


  constructor()   {
    this.projectsall =[]
  ;}
  ngOnInit() {
    
  }
  // deleteProjectall(index: number): void {
  //   this.projectsall.splice(index, 1);
  // }




}
