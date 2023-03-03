import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './userauth.service';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class authComponent implements OnInit {
  
  loginform!: FormGroup;
  userToken: any[] = [];
  token: string;

  constructor(private authService: UserAuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  register() {
    this.authService.registerUser(this.loginform.value).subscribe(
      (res) => {
        this.token = res.token;    // Get the token        
        this.addToAuthToLS(this.token);
        this.router.navigate(['/users']);
        console.log(res);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  login() {
    this.authService.loginrUser(this.loginform.value).subscribe(
      (res) => {
        this.token = res.token;    // Get the token        
        this.addToAuthToLS(this.token);
        this.router.navigate(['/users']);
        // console.log(res);  
        // console.log(this.userToken);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  addToAuthToLS(token: any) {
    if("auth" in localStorage) {
      this.userToken = JSON.parse(localStorage.getItem("auth")!);
      let exsit = this.userToken.find(item => item === token);
      if(exsit) {
        alert("You are already Login")
      }else {
        this.userToken.push(token)
        localStorage.setItem("auth" , JSON.stringify(this.userToken));
      }
    } else {
      this.userToken.push(token)
      localStorage.setItem("auth" , JSON.stringify(this.userToken));
    }
  }
}
