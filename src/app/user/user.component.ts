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

  //    Pagination
  usersPerPage: number = 0;
  totalUsers: number = 0;
  public selectedPage = 1;

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit(): void {
    let page = JSON.parse(localStorage.getItem("page")!);
    this.userSub = this.userService.getAllUsersByPage(page).subscribe((results: any) => {
      // console.log(results);
      this.response = results;
      this.users = results.metadata;

      this.usersPerPage = results.metadata.per_page;
      this.totalUsers = results.metadata.total;
      // console.log(this.usersPerPage);      
    });
  }

  get PageNumbers(): number[] {
    return Array(Math.ceil(this.totalUsers / this.usersPerPage)).fill(0).map((x, i) =>i + 1);
  }


  changePage(pageNumber: number): void {
    this.selectedPage = pageNumber;
    this.userService.getAllUsersByPage(pageNumber).subscribe((results: any) => {
      // console.log(results);
      this.response = results;
      this.users = results.metadata;

      this.usersPerPage = results.metadata.per_page;
      this.totalUsers = results.metadata.total;

      localStorage.setItem("page" , JSON.stringify(this.selectedPage));

    });
    
  }
}
