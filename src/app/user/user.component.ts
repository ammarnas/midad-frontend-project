import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Response } from './interface/response.interface';
import { User } from './interface/user.interface';
import { UserService } from './user.service';
import { Router , RouterLinkActive } from '@angular/router'

@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class userComponent implements OnInit , OnDestroy{
  // users: User[] = [];
  // filtereduser: User[] = [];
  response: Response;
  users: Response;
  userSub : Subscription;

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    this.userSub = this.userService.getAllUsers().subscribe((results: any) => {
      // console.log(results);
      this.response = results;
      this.users = results.metadata;
    });
  }

  public getm() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
