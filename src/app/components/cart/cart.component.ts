import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { forEachChild } from 'typescript';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public books: any;
  public userId: any;
  public totalAmount: number = 0;
  public totalItem: number = 0;
  // public number: number = 0;
  public n : number = 0;
  public cart: any;
  public helperString: string = "";
  public i: number = 0;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }
  ngOnInit(): void {
    this.dataService.getCartById(this.userId).subscribe(response => {
      this.books = response;
      for (let book of this.books) {
        console.log(book);
        this.totalAmount = 0;
        this.totalItem = 0;
        this.dataService.getCartforQuantity(this.userId, book.Id).subscribe(response => {
          this.cart = response;
          this.totalItem = this.totalItem+ 1*this.cart;
          this.totalAmount = this.totalAmount + (book.Price * this.cart);
          //this.totalItem--;
          book["Quantity"] = this.cart;
        });
      }
    })
  }
  onChange(bookId:any, quantity:any) {
    console.log(bookId, quantity);
    if(quantity == 0){
      this.onRemoveButton(bookId);
    }
    else{
      this.dataService.updateCartQuantity(this.userId, bookId,quantity).subscribe(response =>{
        this.ngOnInit();
      })
    }
    
  }
  onRemoveButton(bookId: any) {
    this.dataService.RemoveFromCartById(this.userId, bookId).subscribe(response => {
      console.log(response);
      this.totalAmount = 0;
      this.totalItem = 0;
      this.ngOnInit();
    })
  }
  onCheckout(){
    localStorage.total = this.totalAmount;
  }
}