import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  categoryId: any
  catName : any;
  books: any;
  categories: any;
  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute, private router: Router ) 
  {
    this.categoryId = activatedRoute.snapshot.paramMap.get('categoryId');
  }

  ngOnInit(): void {
    this.dataservice.getBooksByCategoryId(this.categoryId).subscribe((response) => {
      this.books = response
    })
    this.dataservice.getCategories().subscribe((response) => {
      this.categories = response
      this.catName = this.categories.find((x: { CategoryID: any; }) => x.CategoryID === this.categoryId);
      console.log(this.catName)
    })
  }

onButtonClick(catId: any){
  this.dataservice.getBooksByCategoryId(catId).subscribe((response) => {
    this.categoryId = catId
    this.books = response
    this.catName = this.categories.find((x: { CategoryID: any; }) => x.CategoryID === this.categoryId);
  })
}

onCartClick(BookID:number){
  this.router.navigate(['/cart',BookID])
}


onWishlistClick(BookID:number){
  this.router.navigate(['/wishlist',BookID])
}


onViewClick(BookID:number){
  this.router.navigate(['/view',BookID])
}


}
