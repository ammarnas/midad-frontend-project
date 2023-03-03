import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'users-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  info: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(),
      job: new FormControl(),
    });
  }


  createUser() {
    this.userService.createUser(this.userForm.value).subscribe(
      (res) => {
        console.log(res);
        this.info = 'user created successfully'
      },
      (err) => {
        console.log(err.error);
        this.info = 'user created Unsuccessfully'
      }
    );
  }
}
