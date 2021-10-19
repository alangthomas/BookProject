import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
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
    ADDRESS_URL : 'http://localhost:54295/api/address/getByUserId',
  }

  constructor(private http:HttpClient) { }

  getCartById(userId : number): Observable<any>{

    return this.http.get<any>(`${this.ENDPOINTS.CART_URL + userId}` )
  }

  addBook(book : any):Observable <any>{
    return this.http.post<any>('http://localhost:54295/api/book',book);
  }


  RemoveFromCartById(userId:any, bookId:any): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.CART_REMOVE_ID+'/'+userId+'/'+bookId}`);
  }

  getBookById(id : any):Observable <any>{
    return this.http.get<any>('http://localhost:54295/api/book/'+id);
  }

  updateBook(id: any, book: any):Observable<any>{
    return this.http.put<any>('http://localhost:54295/api/book/'+id,book);
  }

  deleteBook(id: any):Observable<any>{
    return this.http.delete<any>('http://localhost:54295/api/book/'+id);
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
  getAddressById(userId:any):Observable<any>{
    return this.http.get<any>(`${this.ENDPOINTS.ADDRESS_URL +'/'+userId}`)
  }

  getBestseller(): Observable <any>{
    return this.http.get<any>('http://localhost:54295/api/book/bestseller')
  }

  getBooksByCategoryId(catId: any): Observable <any>{
    return this.http.get<any>('http://localhost:54295/api/book/catid/'+ catId)
  }

}
