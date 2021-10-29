import { Component, OnInit } from '@angular/core';
import {  DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  viewUser = false;
  viewAddCat = false;
  viewAddBook = false;
  users : any[] = [];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    
    this.dataService.getAllUsers().subscribe(response=>{
      this.users = response;
      console.log(this.users);
    })
  }
  
  onViewUser(){
    this.viewUser = true;
  }
  onActivate(user:any){
    this.viewUser = true
    this.dataService.activateUser(user).subscribe();
  }

  onDisable(user:any){
    console.log(user)
    this.viewUser = true
    this.dataService.disableUser(user).subscribe()
  }

  onViewOrders(id:any){
    console.log(id);
  }

}
