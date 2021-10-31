import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userId: any;
  public user : any;
  public address :any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.dataService.getUserById(this.userId).subscribe(response=>{
      this.user = response;
      // console.log(response);
      this.dataService.getFirstAddressById(this.userId).subscribe(response=>{
        this.address = response;
        // console.log(response)
      })
    })
  }

}
