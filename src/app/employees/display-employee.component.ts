import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  private _employee: Employee

  @Input()
  get employee(): Employee {
    return this._employee;
  }

  set employee(value: Employee) {
    console.log(`Previous: ${this._employee ? this._employee.name : 'NULL'}`);
    console.log(`Current : ${value}`);
    this._employee = value;
  }
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const previousEmployee: Employee =
      <Employee>changes.employee.previousValue;
    const currentEmployee: Employee =
      <Employee>changes.employee.currentValue;

    console.log(`Previous: ${previousEmployee ? previousEmployee.name : 'NULL'}`);
    console.log(`Current: ${currentEmployee ? currentEmployee.name : 'NULL'}`);

    console.log(changes);
  }
}
