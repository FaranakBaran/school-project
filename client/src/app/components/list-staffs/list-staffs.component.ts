import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SchoolStaff } from 'src/app/models/schoolStaff.model';

@Component({
  selector: 'app-list-staffs',
  templateUrl: './list-staffs.component.html',
  styleUrls: ['./list-staffs.component.scss']
})
export class ListStaffsComponent {
  schoolStaffs: SchoolStaff[] | undefined;

  constructor(private http: HttpClient) {}

  showSchoolStaffs(): void {
    this.http.get<SchoolStaff[]>('http://localhost:5000/api/schoolstaff/get-all-staff').subscribe(
      {next: response => this.schoolStaffs = response}
    );
  }
}
