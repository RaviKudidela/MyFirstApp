import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public List:any[]=[{name:"ravi",age:23},{name:"raju",age:24}];
  public data={
    name:"",
    age:null
  };
  constructor() { }

  ngOnInit() {
  }
 newUser(data)
 {
   console.log(data);
   this.data=data;
 }
}
