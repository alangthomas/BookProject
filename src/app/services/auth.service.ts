import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  register(data:any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:54295/register',data)
    }
  login(data:any): Observable<any>{
  return this.httpClient.post<any>('http://localhost:54295/login',data)
  }

  logout(){
  localStorage.clear();
  }


  LoggedIn(){
  if(localStorage.getItem('user')){
    return localStorage.getItem('user') ;
  }else{
    return false;
  }
  }

}