import { Department } from '../models/department.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeFrom')
  public createEmployeeForm: NgForm;
  
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    dateOfBirth: null,
    department: 'select',
    email: '',
    isActive: null,
    phoneNumber: null,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
    this.datePickerConfig =
      Object.assign({},
        {
          containerClass: 'theme-dark-blue',
          dateInputFormat: 'DD/MM/YYYY'
        });
  }

  ngOnInit() {

  }

  onShowPreviewClick(): void {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployeeForm(newEmployee: Employee): void {
    this._employeeService.save(this.employee);
    this._router.navigate(['list']);
  }
}
