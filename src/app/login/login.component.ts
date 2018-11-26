import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userdetails={
    usermail:"",
    userpass:""

  }

  constructor(private userService: UserService) {
    
  }
  submit()
  {
    //console.log(this.userdetails);
    this.userService.setUserDetails(this.userdetails);
  }

  ngOnInit() {
  }

}
