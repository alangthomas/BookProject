import { Component, OnInit } from '@angular/core';
import { Book} from 'src/app/book';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id :any; 
  bookModel = new Book();
  message="";
  alertClass = "alert-success";

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.id = activatedRoute.snapshot.paramMap.get('Id');
    this.id = parseInt(this.id);
  }


  ngOnInit(): void {
    this.dataService.getBookById(this.id).subscribe(response =>{
      this.bookModel.CatId = response.CatId
      this.bookModel.Title = response.Title;
      this.bookModel.ISBN = response.ISBN;
      this.bookModel.Price = response.Price;
      this.bookModel.Year = response.Year;
      this.bookModel.Description = response.Description;
      this.bookModel.Author = response.Author;
      this.bookModel.Position = response.Position
      this.bookModel.Status = 1
      this.bookModel.Image = response.Image
      console.log(response);

    })
  }

  onSubmit(){
    this.bookModel.Id = this.id;
    this.dataService.updateBook(this.id, this.bookModel).subscribe(response =>{
      console.log(response);
    });
    this.message = "SUCCESS";

  }

}
