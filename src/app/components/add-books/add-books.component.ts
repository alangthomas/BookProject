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

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.bookModel.status = 1 ;
    console.log(this.bookModel);
    this.dataService.addBook(this.bookModel).subscribe(response => {
      this.message = "Book added successfully";
      console.log('SUCCESS');
      this.router.navigate(['admin-dashboard'])
    })
  }
  
}
