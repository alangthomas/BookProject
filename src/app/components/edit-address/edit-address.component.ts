import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  
  public address: any;
  public addressId:any;
  message="";
  alertClass = "alert-success";

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.addressId = activatedRoute.snapshot.paramMap.get('addressId');
  }

  

  ngOnInit(): void {
    console.log(this.addressId);
    this.dataService.getAddressByAddressID(this.addressId).subscribe(Response=>{
      this.address = Response;
      // console.log(this.address);
    })  
  }


  onUpdate(address:any){
    this.dataService.updateAddress(address).subscribe(Response=>{
      this.message = Response.Name;
      // console.log(Response);
      // this.router.navigate(['/address/getByUserId', address.UserID]);
    })
  }
  onBack(a:any){
     this.router.navigate(['/address/getByUserId', this.address.UserID]);
  }
}
