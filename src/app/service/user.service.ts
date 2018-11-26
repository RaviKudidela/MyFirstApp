import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name = "Ravi";
  public LoggedInUser = new BehaviorSubject<Object>({});

  public a: number;
  public b: number;
  public c: number;

  getUserDetails()
  {
    return this.LoggedInUser.asObservable();
  }
  setUserDetails(data)
  {
    this.LoggedInUser.next(data);
  }
  getData()
  {
   this.a = 2;
   this.b = 3;
   this.c = this.a * this.b;
   return this.c;
}
  constructor(private http: HttpClient) {

   }
getPosts(): Observable<any>
{
  return this.http.get('https://jsonplaceholder.typicode.com/todos');
}
}
