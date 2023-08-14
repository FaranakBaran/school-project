import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Class } from 'src/app/models/class.model';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.scss']
})
export class ListClassComponent {
  class: Class[] | undefined;

  schoolClasses: string[] = ["7/1", "7/2", "7/3", "8/1", "8/2", "8/3", "9/1", "9/2", "9/3"];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  classFg = this.fb.group({
    schoolClassesCtrl: ['', Validators.required]
  });

  get SchoolClassesCtrl(): FormControl {
    return this.classFg.get('schoolClassesCtrl') as FormControl;
  }

  addClass(): void {
    console.log(this.classFg.value);

    let classes: Class = {
      schoolClasses: this.SchoolClassesCtrl.value
    }

    this.http.post<Class[]>('http://localhost:5000/api/add-class', classes).subscribe(
      {
        next: response => {
          this.class = response;
          console.log(this.class);
        }
      }
    );
  }

  showSchoolClass(): void {
    this.http.get<Class[]>('http://localhost:5000/api/class/get-all-class').subscribe(
      { next: response => this.class = response }
    );
  }
}
