import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Employee } from '../models/employee.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input()
  employeeId: number;

  @Input()
  get employee(): Employee {
    return this._employee;
  }

  set employee(value: Employee) {
    console.log(`Previous: ${this._employee ? this._employee.name : 'NULL'}`);
    console.log(`Current : ${value}`);
    this._employee = value;
  }

  private _employee: Employee

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    for(const changeKey of Object.keys(changes)){
      const change: SimpleChange = changes[changeKey];
      const from: string = JSON.stringify(change.previousValue);
      const to: string = JSON.stringify(change.currentValue);

      console.log(`${changeKey} change from ${from} to ${to}`);
    }
  }
}
