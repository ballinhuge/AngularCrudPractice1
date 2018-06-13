import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true
    },
    {
      id: 1,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345678908,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 54723645726,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
    }
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }

  getEmployee(id: number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }
  save(employee: Employee): void {
    this.listEmployees.push(employee);
  }
}
