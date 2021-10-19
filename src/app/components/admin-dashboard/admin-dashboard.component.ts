import { Component, OnInit } from '@angular/core';
import {  DataService } from 'src/app/services/data.service';
import { User }  from 'src/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users : any[] = [];
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getAllUsers().subscribe(response=>{
      this.users = response;
      console.log(this.users);
    })
  }

  onActivate(user:any){
    this.dataService.activateUser(user).subscribe();
  }

  onDisable(user:any){
    this.dataService.disableUser(user).subscribe()
  }

}
