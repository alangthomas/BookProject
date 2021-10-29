import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/book';
import { Router } from "@angular/router";
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  bookModel = new Book();
  
  message="";
  alertClass = "alert-success";
  viewUser = false;
  viewAddCat = false;
  viewAddBook = false;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.bookModel.Status = 1 ;
    console.log(this.bookModel);
    this.dataService.addBook(this.bookModel).subscribe(response => {
      this.message = "Book added successfully";
      alert("Book added succcessfully");
      this.router.navigate(['admin-dashboard'])
    })
  }

  onViewUser(){
    this.viewUser = true;
  }
  
}
