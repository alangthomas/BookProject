import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { forEachChild } from 'typescript';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public books: any;
  public userId: any;
  public totalAmount: number = 0;
  public totalItem: number = 0;
  public helperString: string = "";
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }
  ngOnInit(): void {
    this.dataService.GetWishListById(this.userId).subscribe(response => {
      this.books = response;
      console.log(response)
      this.books.forEach((item: { Price: any; }) => {
        this.totalAmount = this.totalAmount + item.Price;
        this.totalItem++;
      });
    })
  }
  onRemoveButton(bookId: any) {
    this.dataService.RemoveFromWishlistById(this.userId, bookId).subscribe(response => {
      console.log(response);
      this.totalAmount = 0;
      this.totalItem = 0;
      this.dataService.GetWishListById(this.userId).subscribe(response => {
        this.books = response;
        this.books.forEach((item: { Price: any; }) => {
          this.totalAmount = this.totalAmount + item.Price;
          this.totalItem++;
        });
      })
    })
  }
  onMoveToCartButton(bookId:any){
    console.log(bookId);
    this.dataService.addToCart(this.userId,bookId).subscribe(response =>{
      this.onRemoveButton(bookId);
      this.dataService.GetWishListById(this.userId).subscribe(response => {
        this.books = response;
        this.books.forEach((item: { Price: any; }) => {
          this.totalAmount = this.totalAmount + item.Price;
          this.totalItem++;
        });
      })
    })
  }
}
