import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUser } from '../user/interface/auth.interface';
import { UserAuthService } from './userauth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-root',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class authComponent {
    loginForm!:FormGroup;
    loginUserData :IUser;
    email : string ='eve.holt@reqres.in';
    pass:string ='cityslicka';


    constructor(
      private _auth :UserAuthService ,
      private http: HttpClient,
      private fb:FormBuilder,
      private router:Router) {}

    loginUser() {
        this.loginUserData.email=this.email;
        this.loginUserData.password=this.pass;
        this._auth.loginrUser(this.loginUserData).subscribe(
            res => console.log(res)
        )
    }


    private _loginUrl = 'https://reqres.in/api/login';
  private _registerUrl = 'https://reqres.in/api/register';

  registerUser(user: IUser) {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginrUser(user: IUser) {
    return this.http.post<any>(this._loginUrl,user);
  }

  
}
