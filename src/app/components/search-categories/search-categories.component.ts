import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-categories',
  templateUrl: './search-categories.component.html',
  styleUrls: ['./search-categories.component.css']
})
export class SearchCategoriesComponent implements OnInit {

categories: any;
  searchString: any;
  constructor(private dataService:DataService, private activatedRoute: ActivatedRoute, private router :Router) { 
    this.searchString = activatedRoute.snapshot.paramMap.get('searchstring');
  }

  ngOnInit(): void {
     this.dataService.getCategoriesBySearch(this.searchString).subscribe((response) =>{
      this.categories = response;
    })
  }
  onButtonClick(catID:number){
    this.router.navigate(['/books',catID]);
  }


}
