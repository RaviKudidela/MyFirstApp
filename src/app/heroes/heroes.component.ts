import { Component, OnInit } from '@angular/core';
import {Heroes} from '../herosList'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public heroesList = Heroes;
  public data: Object;
  

  constructor() { 
    this.data ={
      name:"Ravi",
      password: ""
    };

  
  
  

  }


  ngOnInit() {
  }
  submit(name)
  {
   console.log(this.data);
   console.log(name);
  }

}
