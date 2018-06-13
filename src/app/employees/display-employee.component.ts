import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';


@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input()
  employeeId: number;

  private employee: Employee

  constructor() {

  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const changeKey of Object.keys(changes)) {
      const change: SimpleChange = changes[changeKey];
      const from: string = JSON.stringify(change.previousValue);
      const to: string = JSON.stringify(change.currentValue);
      console.log(`${changeKey} change from ${from} to ${to}`);
    }
  }

  getEmployeeNameAndGender(): string {
    return `${this.employee.name} ${this.employee.gender}`;
  }
}
