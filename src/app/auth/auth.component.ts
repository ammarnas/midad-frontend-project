import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/interface/auth.interface';
import { UserAuthService } from './userauth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-root',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class authComponent implements OnInit {
  email: string = 'eve.holt@reqres.in';
  pass: string = 'cityslicka';
  loginform!: FormGroup;

  constructor(private authService: UserAuthService) {}

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  register() {
    this.authService.registerUser(this.loginform.value).subscribe(
      (user) => {
        console.log(user);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  login() {
    this.authService.loginrUser(this.loginform.value).subscribe(
      (user) => {
        console.log(user);
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  //   loginUser() {
  //     this.loginUserData.email=this.email;
  //     this.loginUserData.password=this.pass;
  //     this._auth.loginrUser(this.loginUserData).subscribe(
  //         res => console.log(res)
  //     )
  // }
  // private _loginUrl = 'https://reqres.in/api/login';
  // private _registerUrl = 'https://reqres.in/api/register';

  // registerUser(user: IUser) {
  //   return this.http.post<any>(this._registerUrl,user);
  // }

  // loginrUser(user: IUser) {
  //   return this.http.post<any>(this._loginUrl,user);
  // }
}
