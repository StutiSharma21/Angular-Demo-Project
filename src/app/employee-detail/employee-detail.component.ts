import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees : IEmployee[] = [];

  constructor(private _employeeService : EmployeeService){

  }
  
  ngOnInit() {
    console.log("dsfsdfs")
    this._employeeService.getEmployees().subscribe(data => {this.employees = data;
      console.log(data);
      console.log(23);
    });

  }

}
