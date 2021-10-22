import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/address';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})

export class AddAddressComponent implements OnInit {

  AddressModel = new Address();
  public userId :any;
  public user:any;
  message = ""
  alertClass = "alert-success";
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }


  ngOnInit(): void {
      this.dataService.getUserById(this.userId).subscribe(response => {
        this.user = response;
      });
  }
  
  onSubmit(Address : any){
    Address.UserID = this.userId;
    this.dataService.addAddress(Address).subscribe(response => {
      console.log(response);
    })
  }
}
