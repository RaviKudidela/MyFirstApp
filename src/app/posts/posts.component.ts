import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public postlist: any[] =[];
  constructor(private Username: UserService, private router:Router) { }

  ngOnInit() {
  this.Username.getPosts().subscribe((res)=>{

    console.log(res);
    this.postlist = res;
});


  }
  navigateToLifeCycle(){
    this.router.navigate(['posts/Lifecycle']);
  }
}
