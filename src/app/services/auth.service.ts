import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { } 


  register(userDetails:User){
    return this.http.post(`${this.baseUrl}/users`, userDetails);

  } 
  IsLoggedIn(){
    return localStorage.getItem('access_token')!=null;
  }
  sendFormData(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(`${this.baseUrl}/client`, data, httpOptions);
   
  }  

  login (data:any):Observable<any> { 

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(`${this.baseUrl}/authentification/login`, data, httpOptions);
}
getClients():Observable<any>{  


  return this.http.get<any>(`${this.baseUrl}/client`);


}

getConsultant():Observable<any>{  
  return this.http.get<any>(`${this.baseUrl}/consultant`);
}


getProject():Observable<any>{  

  return this.http.get<any>(`${this.baseUrl}/project`);

}


sendProject(data:any):Observable<any>{ 
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.post<any>(`${this.baseUrl}/project`, data, httpOptions);
}

Getid(role:string,username:string):Observable<any>{  

  return this.http.get<any>(`${this.baseUrl}/${role}/username/${username}`);

}

sendConsultant(data:any):Observable<any>{ 
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.post<any>(`${this.baseUrl}/consultant`, data, httpOptions);
}

sendadministrator(data:any):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.post<any>(`${this.baseUrl}/admin`, data, httpOptions);


}
decode (data:any):Observable<any>  {  

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.post<any>(`${this.baseUrl}/authentification/token`, data, httpOptions);



}

assign(username:string,title:string):Observable<any> { 
    
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  

  return this.http.post<any>(`http://localhost:8080/client/${username}/projects/${title}`, httpOptions);


}
delete (titre:string) :Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  

  return this.http.delete<any>(`http://localhost:8080/project/${titre}`, httpOptions);

}
isTokenValid(exp: string): boolean {
  const expirationTime = Number(exp) * 1000;

  if (expirationTime) {
    const currentTime = new Date().getTime();
    return expirationTime > currentTime;
  }

  return false;
}
isLoggedInClient():boolean{

  let token =localStorage.getItem('access_token');
  if(token ){
    const decodedToken =jwtDecode.jwtDecode(token) as { [key: string]: string }; 
    const role = decodedToken['role']; 
    return role === 'Client';
  }else{
    return false;
  }

}
isLoggedInConsultant():boolean{

  let token =localStorage.getItem('access_token');
  if(token ){
    const decodedToken = jwtDecode.jwtDecode(token) as { [key: string]: string }; 
    const role = decodedToken['role']; 
    return role === 'Consultant';
  }else{
    return false;
  }

}
isLoggedInAdministrator():boolean{

  let token =localStorage.getItem('access_token');
  if(token ){
    const decodedToken = jwtDecode.jwtDecode(token) as { [key: string]: string }; 
    const role = decodedToken['role']; 
    return role === 'Administrator';
  }else{
    return false;
  }

}
getProjectsbyClientUsername(username:string):Observable<any> { 
  return this.http.get<any>(`${this.baseUrl}/client/${username}/projects`);
}
getProjectsbyConsultantUsername(username:string):Observable<any> { 
  return this.http.get<any>(`${this.baseUrl}/consultant/${username}/projects`);
}

getUsername():string {
  
  let token =localStorage.getItem('access_token');
  if(token ){
    const decodedToken = jwtDecode.jwtDecode(token) as { [key: string]: string }; 
    return decodedToken['username']; 
}else { 
  return ''; 
}
}}
// extractRole():any { 

//   const payload = {
//     access_token : localStorage.getItem('access_token')
    
//     } ;  
//     this.decode(payload).subscribe( 
// (response)=> { 
// console.log(response.role); 
// console.log(typeof(response.role));
// return response.role; 

// }


//     )

  // getUserByEmail(email: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  // }

