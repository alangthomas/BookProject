import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel = new User()
  message :any;
  alertClass:any;

  constructor(private authService:AuthService, private redirect : Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.register(this.userModel).subscribe(response => {
      console.log(response)
      if(response){
        this.message = "registered"
        this.alertClass = 'alert-success'
        this.redirect.navigateByUrl('home')
      }else{
        this.message = 'registration failed';
        this.alertClass = 'alert-danger'
      }
      
    })
 }

}
