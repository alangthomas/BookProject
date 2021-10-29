import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from 'src/app/services/data.service'; 
import { Coupon } from 'src/app/coupon'
@Component({
  selector: 'app-add-coupons',
  templateUrl: './add-coupons.component.html',
  styleUrls: ['./add-coupons.component.css']
})
export class AddCouponsComponent implements OnInit {

  couponModel = new Coupon();
  message="";
  alertClass = "alert-success";
  

  constructor(private dataService : DataService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    this.dataService.addCoupon(this.couponModel).subscribe(response=>{
      if(response){
        alert("Coupon Added Successfully");
        this.router.navigate(['admin-dashboard']);
      }
      else{
        this.message = "Error in adding coupon"
      }
    })

  }

}
