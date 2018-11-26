import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  

}
