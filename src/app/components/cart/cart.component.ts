import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import * as internal from 'stream';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public books : any;
  public userId : any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { 
    // this.catName = activatedRoute.snapshot.paramMap.get('catName');
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }
  
  // public subtotal:any;
  // ngOnInit(): void {
  //   this.dataService.getCartById(this.userId).subscribe((response) => {
  //     console.log(response)
  //     this.books = response;
  //     // console.log(this.books[0].Author)
  //   })
  // }
  ngOnInit(): void {
    this.dataService.getCartById(this.userId).subscribe(response => {      
      this.books = response.data;
    })
  }

}
