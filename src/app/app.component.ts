import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  public name = 'Ravi';
  public showname: any[] = [];
  public list: any[] = [1,2,3,4];
  public listObj: any[] = [{name: 'ravi', age: 28}, {name:'ramu', age: 45}];
  public department: string;
constructor(private userService: UserService)
{
  this.department = 'UI';
  // this.res = console.log(this.userService.getData());
    console.log(this.userService.name);
 
}
}

