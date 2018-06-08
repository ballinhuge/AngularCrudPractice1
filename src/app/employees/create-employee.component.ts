import { Department } from '../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    dateOfBirth: null,
    department: null,
    email: null,
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

  constructor() {
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
    console.log(newEmployee);
  }
}