import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedin :any;
  userId: any;

  constructor(private authService: AuthService, private router : Router) {
    this.loggedin = this.authService.LoggedIn()
    this.userId = localStorage.getItem('userId')
   }

  ngOnInit(): void {
  }
  onLogout(){
      this.authService.logout();
      this.router.navigateByUrl('login')
  }

  onSubmit(data:any){
    console.log(data)
  }

}
