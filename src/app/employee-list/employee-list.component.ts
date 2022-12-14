import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({ 
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public employees : IEmployee[] = [];

constructor(private _employeeService : EmployeeService){
 
}
  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data);

  }
}
