import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  public employees: Employee[];
  public employeeToDisplay: Employee;
  private arrayIndex: number = 1;
  private dataFromChild: Employee;
  constructor(private _employeeService: EmployeeService,
  private _router: Router) { }

  ngOnInit() {
    this.employees =
      this._employeeService.getEmployees();
      this.employeeToDisplay = this.employees[0];
  }
  nextEmployee(): void {
    if(this.arrayIndex <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

  onClick(id: number): void {
    this._router.navigate([`/employees`, id]);
  }
  handleNotify(employee: Employee): void {
    this.dataFromChild = employee;
  }
}