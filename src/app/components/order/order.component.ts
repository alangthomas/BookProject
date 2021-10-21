import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public books: any;
  public userId: any;
  public totalAmount: number = 0;
  public totalItem: number = 0;
  public user: any;
  public dateOut :any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }
  ngOnInit(): void {
    this.dataService.getOrderById(this.userId).subscribe(response => {
      this.books = response;
      console.log(response)

      this.dataService.getUserById(this.userId).subscribe(response=>{
        this.user = response;
        console.log(response);
      })
    })
  }
}
