import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Array<object>;

  constructor(private employeeService: EmployeeService) 
  { }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getEmployees();
  }
}

// export class EmployeeListComponent1 implements OnInit {
//   employeeList: Array<object>;
//    empServ: EmployeeService;
//   constructor() {
//      this.empServ = new EmployeeService();
//    }
