import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name = "Ravi";

  public a: number;
  public b: number;
  public c: number;
   
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
