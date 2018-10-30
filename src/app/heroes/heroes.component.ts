import { Component, OnInit } from '@angular/core';
//import {Heroes} from '../herosList'
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroesList: any[]=[];
  public data: Object;
  public res: any;

  constructor(private userService: UserService) { 
    

    this.data ={
      name:"Ravi",
      password: ""
    };

    }
   ngOnInit() {
    this.res = console.log(this.userService.getData());
    console.log(this.userService.name);
  }
  submit(name)
  {
   console.log(this.data);
   console.log(name);
  }

}
