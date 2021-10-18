import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private dataService :DataService, private router :Router) { }
  categories: any;
  number: any;

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((response) => {
      this.categories = response
      this.number = Object.keys(this.categories).length
      console.log(this.categories)
      console.log("here")
  })
}


 onButtonClick(catID:number){
    this.router.navigate(['/showBooks',catID]);
  }

}
