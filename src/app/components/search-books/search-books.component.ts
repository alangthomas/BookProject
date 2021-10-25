import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  searchString: any;
  select: any;
  books: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.searchString = activatedRoute.snapshot.paramMap.get('searchString');
    this.select = activatedRoute.snapshot.paramMap.get('select');
  }

  ngOnInit(): void {
    console.log('here')
    if (this.select == '1') {
      this.dataService.getBooksBySearch(this.searchString).subscribe((response) => {
        this.books = response;
        console.log(this.books)
      })
    }
    else{
      this.dataService.getBooksBySearchISBN(this.searchString).subscribe((response) => {
        this.books = response;
      })
    }
  }

  onCartClick(BookID:number){
    this.dataService.addToCart(localStorage.getItem('userId'),BookID).subscribe((response) =>{
      this.router.navigate(['/cart',localStorage.getItem('userId')])
    })
  }
  
  
  onWishlistClick(BookID:number){
    this.dataService.addToWishlist(localStorage.getItem('userId'),BookID).subscribe((response) =>{
      this.router.navigate(['/wishlist',localStorage.getItem('userId')])
    })
    
  }


  onViewClick(BookID: number) {
    this.router.navigate(['/view-book', BookID])
  }
}
