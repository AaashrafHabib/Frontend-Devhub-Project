import { Injectable } from '@angular/core';
import {project} from "../components/modell/project";
import {consultant} from "../components/modell/consultant";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {
  private baseUrl = 'http://localhost:8080';
   private projects!: project[];
   private consultants!: consultant[];



  constructor(private http:HttpClient)

  { }


  getprojects():Observable<any> { 
    return this.http.get<any>(`${this.baseUrl}/project`);
  }
  getconsultants():Observable<any> { 
    return this.http.get<any>(`${this.baseUrl}/consultant`);
  }

  assign(consultant:any,project:any):Observable<any> { 
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    console.log(consultant);
    console.log(project);

    return this.http.post<any>(`localhost:8080/consultant/1/projects/1`, httpOptions);


  } 

}
