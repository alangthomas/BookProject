import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: any;
  number:any;
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
}

onButtonClick(catID:number){
  this.router.navigate(['/showBooks',catID]);
}

}
