import { Component, OnInit, OnDestroy } from '@angular/core';
//import {Heroes} from '../herosList'
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroesList: any[] = [];
  public data: Object;
  public res: any;
  public subscription: Subscription;
  public LoggedInUserDetails: any;

  constructor(private userService: UserService, private router: Router) {

     this.data = {
      name: "Ravi",
      password: ""
      };
      this.subscription=this.userService.getUserDetails().subscribe((data)=>{
        this.LoggedInUserDetails=data;
      })


  }
  ngOnInit() {
    this.res = console.log(this.userService.getData());
    console.log(this.userService.name);
  }
  submit(name) {
    console.log(this.data);
    console.log(name);
  }
  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
