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
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.userId = activatedRoute.snapshot.paramMap.get('userId');
   }

  ngOnInit(): void {
    this.dataService.getAddressById(this.userId).subscribe(data=>{
        this.address  = data;
        console.log(data)
    })
  }

  onDeliver(id:number){
    console.log(id)
  }

  onDelete(id: number){
    console.log(id);
  }

  onEdit(addr: any){
    console.log(addr)
  }

}
