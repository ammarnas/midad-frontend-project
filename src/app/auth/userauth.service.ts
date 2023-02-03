import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../user/interface/auth.interface';



@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private _loginUrl = 'https://reqres.in/api/login';
  private _registerUrl = 'https://reqres.in/api/register';

  constructor(private http: HttpClient) {}

  registerUser(user: IUser) {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginrUser(user: IUser) {
    return this.http.post<any>(this._loginUrl,user);
  }
}