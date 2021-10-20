import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { Book } from 'src/app/book';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any;
  number:any;
  bestsellers: any;
  
  

  constructor(config: NgbCarouselConfig,private dataService :DataService, private router :Router) {  
    config.interval = 3000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((response) => {
      this.categories = response
      this.number = Object.keys(this.categories).length
      console.log(this.categories)
      console.log("here")
  })
  
  this.dataService.getBestseller().subscribe((response) =>{
    this.bestsellers = response;
    console.log(this.bestsellers)
  })
}

onButtonClick(catID:number){
  this.router.navigate(['/books',catID]);
}

onCartClick(BookID:number){
  this.dataService.addToCart(localStorage.getItem('userId'),BookID)
  this.router.navigate(['/cart',localStorage.getItem('userId')])
}


onWishlistClick(BookID:number){
  this.dataService.addToWishlist(localStorage.getItem('userId'),BookID)
  this.router.navigate(['/wishlist',localStorage.getItem('userId')])
}


onViewClick(BookID:number){
  this.router.navigate(['/view-book',BookID])
}

}
