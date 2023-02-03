import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'users-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  userid?= this.route.snapshot.paramMap.get('id');
  userSub: any;
  userinfo: any;
  constructor(
    private route :ActivatedRoute,
    private userService: UserService,
    private router:Router
    ) {}


  ngOnInit(): void {
    
    this.userSub = 
    this.userService.getUser(this.userid)
    .subscribe((results: any) => {
      // console.log(results);
      this.userinfo = results.data;
      // console.log(this.userinfo)
    })
  }


  onBack(): void {
    this.router.navigate(['/users']);
  }

  Delete(userid : any):void {
    this.userService.DeleteUser(userid).subscribe(
      (response: any) => {
        // console.log(response);
        if(response === null)
        alert("user deleted")
        this.router.navigate(['/users']);
      }
    );
  }
}



