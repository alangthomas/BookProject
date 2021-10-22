import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  userId: any;
  address : any[] = []
  addressId : any;
  firstTime = true;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
   }

  ngOnInit(): void {
    this.dataService.getAddressById(this.userId).subscribe(data=>{
        this.address  = data;
        this.firstTime = true;
        console.log(data)
    })
  }

  onDeliver(id:number){
    console.log(id)
    this.addressId = id;
    this.firstTime = false;
  }

  onDelete(id: number){
    console.log(id);
  }

  onEdit(addr: any){
    console.log(addr)
  }

}
