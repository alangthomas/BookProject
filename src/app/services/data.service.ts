import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private ENDPOINTS = {
    CART_URL: 'http://localhost:54295/api/cart/',
    CART_REMOVE_ID :'http://localhost:54295/api/cart/remove',
    WISHLIST_URL : 'http://localhost:54295/api/wishlist/',
    WISHLIST_REMOVE_ID : 'http://localhost:54295/api/wishlist/remove',
    ADD_TO_CART : 'http://localhost:54295/api/cart/add',
    ADD_TO_WISHLIST : 'http://localhost:54295/api/wishlist/add',
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

  getCategories(): Observable <any>{
    return this.http.get<any>('http://localhost:54295/api/category')
  }
  GetWishListById(userId: any):Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.WISHLIST_URL + userId}`)
  }

  RemoveFromWishlistById(userId:any, bookId:any): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.WISHLIST_REMOVE_ID +'/'+userId+'/'+bookId}`);
  }
  
  addToCart(userId:any, bookId:any):Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.ADD_TO_CART +'/'+userId+'/'+bookId}`);
  }

  addToWishlist(userId:any, bookId:any):Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.ADD_TO_WISHLIST +'/'+userId+'/'+bookId}`);
  }
}
