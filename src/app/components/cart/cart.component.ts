import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { forEachChild } from 'typescript';


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
  public quantity : number = 0;
  public helperString: string = "";
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }
  ngOnInit(): void {
    this.dataService.getCartById(this.userId).subscribe(response => { 
      this.books = response;
      this.books.forEach((item: { Price: any; }) => {
        this.totalAmount = this.totalAmount + item.Price;
        this.totalItem++;
      });
    })
  }
  onChange(){
    console.log(this.quantity);
  }
    onRemoveButton(bookId: any) {
    this.dataService.RemoveFromCartById(this.userId, bookId).subscribe(response => {
      console.log(response);
      this.totalAmount = 0;
      this.totalItem = 0;
      this.dataService.getCartById(this.userId).subscribe(response => {
        this.books = response;
        this.books.forEach((item: { Price: any; }) => {
          this.totalAmount = this.totalAmount + item.Price;
          this.totalItem++;
        }); 
      })
    })
  }
}

