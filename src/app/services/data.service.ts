import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINTS = {
    CART_URL: 'http://localhost:54295/api/cart/'
  }

  constructor(private http:HttpClient) { }
  getCartById(userId : number): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.CART_URL + userId}` )
  }

  addBook(book : any):Observable <any>{
    return this.http.post<any>('http://localhost:54295/api/book',book);
  }

  getCategories(): Observable <any>{
    return this.http.get<any>('http://localhost:54295/api/category')
  }

  getBestseller(): Observable <any>{
    return this.http.get<any>('http://localhost:54295/api/book/bestseller')
  }

}
