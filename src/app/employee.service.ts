import { Injectable } from '@angular/core';
//import { UserModule } from './user.module';


@Injectable({
  providedIn: 'root'
  //providedIn: 'UseModule'
})

export class EmployeeService{
  employee: Array<object> = [
    { name: 'Conor McGregor', role: 'manager'},
    { name: 'Tony Ferguson', role: 'team lead'},
    { name: 'Max Holloway', role: 'team member'},
    { name: 'Jon Jones', role: 'team member'},
    { name: 'Daniel Cormier', role: 'team member'},
    { name: 'Brock Lesnar', role: 'team member'}
  ];
  constructor() { }
  getEmployees(){
    return this.employee;
}
}
