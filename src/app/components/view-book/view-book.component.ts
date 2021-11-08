import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from "@angular/router";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  user :any;
  book : any = [];
  id : any;
  isLoggedIn : any;

  constructor(private dataservice: DataService, private activatedRoute: ActivatedRoute, private router: Router ) 
  {
    this.id = activatedRoute.snapshot.paramMap.get('Id');
  }
  

  ngOnInit(): void {
    this.user = localStorage.getItem("user")
    this.dataservice.getBookById(this.id).subscribe(response => {
      this.book = response;
      console.log(this.book);
    })
  }
  
  onDeleteClick(id: number){
    console.log(id);
    this.dataservice.deleteBook(id).subscribe(response=>{    
    }); 
    window.alert("Delete Book?");
    this.router.navigate(['']);
  }

  addToCart(id: number){

  }

  wishlist(id: number){
    
  }
  

}
