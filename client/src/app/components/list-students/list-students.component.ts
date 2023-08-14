import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})
export class ListStudentsComponent {
  students: Student[] | undefined

  constructor(private http: HttpClient) { }

  showStudents(): void {
    this.http.get<Student[]>('http://localhost:5000/api/student/get-all-student').subscribe(
      { next: response => this.students = response }
    );
  }
}
