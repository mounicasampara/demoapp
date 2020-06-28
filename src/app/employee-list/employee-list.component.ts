import { Post } from './../Post';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  bookList: Post[];

  constructor(private employeeService: EmployeeService) 
  { }

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(response => this.bookList = response);
  }
}

// export class EmployeeListComponent1 implements OnInit {
//   employeeList: Array<object>;
//    empServ: EmployeeService;
//   constructor() {
//      this.empServ = new EmployeeService();
//    } 