import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return localStorage.getItem('token')!=null;
  }
  sendFormData(formData: any): Observable<any> {
    const data=JSON.stringify(formData);
    console.log(data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.baseUrl}/client`, data, { headers });
    
  }


  }















  // getUserByEmail(email: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  // }

