import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  
  id:any;
  book : any = [];
  order: any = [];
  user : any = [];

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get('userId');
   }

  ngOnInit(): void {
    this.dataservice.getUserById(this.id).subscribe(response=>{
      this.user = response;
      console.log(this.user);
    })
    
    this.dataservice.getOrderByUserId(this.id).subscribe(response=>{
      this.order = response;
      for(let o of this.order)
      { 
        this.dataservice.getBookById(o.BookID).subscribe(data=>{
        this.book = data;
        o["Title"] = this.book['Title'];
        o["Author"] = this.book['Author'];
        o["Price"] = this.book['Price'];
        })
        
        o['OrderDate'] = o['OrderDate'].substring(0,10)

      }
      console.log(this.order);
    })
  }

}
