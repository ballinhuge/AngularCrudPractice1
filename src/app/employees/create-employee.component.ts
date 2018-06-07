import { Department } from '../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  dateOfBirth: Date = new Date(2018, 0, 31);
  previewPhoto = false;
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
          showWeekNumbers: false,
          minDate: new Date(2018, 0, 1),
          maxDate: new Date(2018, 12, 31),
          dateInputFormat: 'DD/MM/YYYY'
        });
  }

  ngOnInit() {
    
  }
  
  onShowPreviewClick(): void {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployeeForm(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
