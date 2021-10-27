import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from "@angular/router";
@Component({
  selector: 'app-view-coupons',
  templateUrl: './view-coupons.component.html',
  styleUrls: ['./view-coupons.component.css']
})
export class ViewCouponsComponent implements OnInit {
  coupons : any[] = []

  constructor(private dataService: DataService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getAllCoupon().subscribe(response=>{
      this.coupons = response;
      console.log(this.coupons);
    })
  }

  onDelete(id:number){
    this.dataService.deleteCouponById(id).subscribe(data=>{ });
    
  }

}
