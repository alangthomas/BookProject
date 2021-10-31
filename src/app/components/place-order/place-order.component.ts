import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  order:any = []
  delevery = 40;
  finalCartTotal: any;
  promoValue = 0 ;
  userId:any;
  addressId: any;
  address: any = [];
  promo: any = [];
   books: any = []
  promoCode = "";
  message = "";
  alertClass = "text-success"
  cart: any = [];
  public totalAmount = Number(localStorage.total);
  public totalItem: number = 0;

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute, private router: Router ) 
  {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
    
  }

  ngOnInit(): void {
    this.promoValue = 0
    this.dataservice.getCartById(this.userId).subscribe(response => {
      this.books = response;
      for (let book of this.books) {
        console.log(book);
        
        this.totalItem = 0;
        this.dataservice.getCartforQuantity(this.userId, book.Id).subscribe(response => {
          this.cart = response;
          this.totalItem = this.totalItem+ 1*this.cart;
          
          //this.totalItem--;
          book["Quantity"] = this.cart;
        });
      }
    })
    console.log(this.books)
    
    this.addressId = localStorage.addressId
    this.dataservice.getAddressByAddrId(this.addressId).subscribe(data=>{
        this.address = data;
        
    })
    if(this.promo.length){
      
      if(this.promo.MaxAmount < this.totalAmount*this.promo.Discount/100){
        this.promoValue = this.promo.MaxAmount;
      }
      else{this.promoValue = this.totalAmount*this.promo.Discount/100}
  
      this.finalCartTotal = this.totalAmount+this.delevery-this.promoValue;
    }
    else{
      console.log(this.finalCartTotal)
      
      this.finalCartTotal = this.totalAmount+this.delevery
    }

  }

  onSubmit(){
      this.dataservice.checkCoupon(this.promoCode).subscribe(data=>{
        if(data){
          this.alertClass = "text-success";
          this.message = "Promo applied";
          this.dataservice.getCouponByCode(this.promoCode).subscribe(response=>{
            this.promo = response
             //console.log(this.promo)
          })
          localStorage.discount = Math.min(this.promo.MaxAmount, this.totalAmount*this.promo.Discount/100)
          
        }
        else{
          localStorage.discount = 0
          this.alertClass = "text-danger";
          this.message = "Invalid code";
        }
      })
      
      if(this.promo){
        if(this.promo.MaxAmount < this.totalAmount*this.promo.Discount/100){
          this.promoValue = this.promo.MaxAmount;
        }
        else{this.promoValue = this.totalAmount*this.promo.Discount/100}
        
        this.finalCartTotal = this.totalAmount+this.delevery-this.promoValue;
      }
      else{
         //console.log(this.promo)
        // console.log(this.promoValue)
        this.finalCartTotal = this.totalAmount+this.delevery
      }
      console.log(this.finalCartTotal)
      
  }
   

  onPlaceOrder(){
    for (let book of this.books){
      this.order.push({"UserID":Number(this.userId), "BookID":book.Id})

      // this.order["UserID"] = Number(this.userId);
      // this.order["BookID"] = book.Id;
       
    }
    //console.log(this.order)
    for(let o of this.order){
      this.dataservice.addOrder(o).subscribe(data=>{
        
      })
    console.log(o)
    }
    if(this.order){
      alert("Order Placed Successfully")
      this.router.navigateByUrl('home')
    }
  }

  getFinalCartTotal(){
    return this.finalCartTotal
  }



}
