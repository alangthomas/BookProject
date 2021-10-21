import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from "@angular/router";


@Component({
  selector: 'app-view-all-orders',
  templateUrl: './view-all-orders.component.html',
  styleUrls: ['./view-all-orders.component.css']
})
export class ViewAllOrdersComponent implements OnInit {

  id:any;
  book : any = [];
  order: any = [];
  user : any = [];

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get('userId');
   }

  ngOnInit(): void {
   this.dataservice.getAllOrders().subscribe(data=>{
      this.order = data;
      for(let o of this.order)
      {
        this.dataservice.getBookById(o.BookID).subscribe(data=>{
          this.book = data;
          o["Title"] = this.book['Title'];
          o["Author"] = this.book['Author'];
          o["Price"] = this.book['Price'];
          })
        this.dataservice.getUserById(o.UserID).subscribe(data=>{
          this.user = data;
          console.log(this.user)
          o["UserName"] = this.user['Name']
          o["UserId"] = this.user['UserId']
        })
          o['OrderDate'] = o['OrderDate'].substring(0,10)
        console.log(o)
      }
    }) 
  }

}
