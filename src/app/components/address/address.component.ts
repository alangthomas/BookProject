import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  public userId: any;
  public addresses: any;
  public user: any;

  message="";
  alertClass = "alert-success";

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.dataService.getAddressById(this.userId).subscribe(response => {
      this.addresses = response;
      console.log(response);
      this.dataService.getUserById(this.userId).subscribe(response => {
        this.user = response;
        console.log(response);
      });
    });
  }
  onRemoveButton(AddressID:any){
    this.dataService.removeAddressById(AddressID).subscribe(response=>{
      console.log(response)
      this.ngOnInit()
    })
  }

  onUpdate(address:any){
    this.dataService.updateAddress(address).subscribe(Response=>{
      console.log(Response);
      this.message = Response.Name;
      this.ngOnInit();
    })
  }
}
