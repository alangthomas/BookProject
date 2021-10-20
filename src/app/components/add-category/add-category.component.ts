import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryModel = new Category();
  message = ""
  alertClass = "alert-success";

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.categoryModel);
    this.dataService.addCategory(this.categoryModel).subscribe(response=>
      console.log(response));
  }

}
