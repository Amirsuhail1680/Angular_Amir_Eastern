import { employees } from './employee-list';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Subject } from 'rxjs';
@Injectable()
export class EmployeeService {
items = [];
public employees = new Subject();
  constructor(private http: HttpClient) { }

  addEmp(empId) {
  this.items.push(empId)
  employees.push(empId)
  console.log(employees);
  return  this.items;
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}