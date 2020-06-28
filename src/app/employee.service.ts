import { Post } from './Post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  url = 'https://jsonplaceholder.typicode.com/posts';
  SERVER_URL: string = "http://localhost:8080/api/";

  constructor(private httpclient: HttpClient) { }

  getEmployees(): Observable<Post[]>{
    return this.httpclient.get<Post[]>(this.url); 
  }

  getEmployeesFromInMemoryDb(): Observable<Post[]>{
    return this.httpclient.get<Post[]>(this.SERVER_URL + 'posts');
  }
}