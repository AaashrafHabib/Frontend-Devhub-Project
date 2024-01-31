import {Component, Input, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PrincipalService } from 'src/app/services/principal.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() selectedproject: any ;
  @Input() selectedconsultant: any ;
  projects: any[] = [];
a:boolean=false;

  constructor(private principal_service : PrincipalService, private auth :AuthService)   {
  ;}
  ngOnInit() {
    this.principal_service.getprojects().subscribe(

      (response)=>{
          this.projects=response;
         }
    )
  }
  delete (project:string) { 
      this.auth.delete(project).subscribe( 

     ); 
}


 

}
