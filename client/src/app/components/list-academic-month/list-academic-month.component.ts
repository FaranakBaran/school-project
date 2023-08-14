import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { Month } from 'src/app/models/month.model';

@Component({
  selector: 'app-list-academic-month',
  templateUrl: './list-academic-month.component.html',
  styleUrls: ['./list-academic-month.component.scss']
})
export class ListAcademicMonthComponent {
  months: Month[] | undefined;

  academicMonths: string[] = ["Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand", "Farvardin", "Ordibehesht", "Khordad"];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  monthFg = this.fb.group({
    academicMonthsCtrl: ['', Validators.required]
  });

  get AcademicMonthCtrl(): FormControl {
    return this.monthFg.get('academicMonthsCtrl') as FormControl;
  }

  addMonth(): void {
    console.log(this.monthFg.value);

    let month: Month = {
      academicMonths: this.AcademicMonthCtrl.value
    }

    this.http.post<Month[]>('http://localhost:5000/api/add-month', month).subscribe(
      {
        next: response => {
          this.months = response;
          console.log(this.months);
        }
      }
    );
  }

  showAcademicMonth(): void {
    this.http.get<Month[]>('http://localhost:5000/api/month/get-all-month').subscribe(
      { next: response => this.months = response }
    );
  }
}



