import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel = new User();
  message = "";
  alertClass = "alert-success";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userModel);
    this.authService.login(this.userModel).subscribe( response => {
      console.log(response);
      if(response.Email != undefined){
      // localStorage.setItem("name",this.userModel.name);
      localStorage.setItem("user",response.Email);
      localStorage.setItem("userId",response.UserId);
      this.alertClass = "alert-success" ;
      this.router.navigate([''])
      }
      else{
        this.alertClass = "alert-danger";
        this.message = response;
      }
      
      
      
    })
  }

}
