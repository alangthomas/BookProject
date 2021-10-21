import { Component, OnInit } from '@angular/core';
import {  DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  viewUser = false;
  users : any[] = [];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.viewUser=false;
    this.dataService.getAllUsers().subscribe(response=>{
      this.users = response;
      console.log(this.users);
    })
  }
  
  onViewUser(){
    this.viewUser = true;
  }
  onActivate(user:any){
    this.dataService.activateUser(user).subscribe();
  }

  onDisable(user:any){
    this.dataService.disableUser(user).subscribe()
  }

  onViewOrders(id:any){
    console.log(id);
  }

}
