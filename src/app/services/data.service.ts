import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINTS = {
    CART_URL: 'http://localhost:54295/api/cart/',
    CART_REMOVE_ID :'http://localhost:54295/api/cart/remove'
  }

  constructor(private http:HttpClient) { }
  getCartById(userId : any): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.CART_URL + userId}` )
  }

  addBook(book : any):Observable <any>{
    return this.http.post<any>('http://localhost:54295/api/book',book);
  }

  RemoveFromCartById(userId:any, bookId:any): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.CART_REMOVE_ID+'/'+userId+'/'+bookId}`);
  }

}
