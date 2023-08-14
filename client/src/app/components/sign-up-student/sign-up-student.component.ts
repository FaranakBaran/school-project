import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-sign-up-student',
  templateUrl: './sign-up-student.component.html',
  styleUrls: ['./sign-up-student.component.scss']
})
export class SignUpStudentComponent {
  studentRes: Student | undefined;

  payetahsili: string[] = ["Diplpma", "Bachlor", "Master", "PH.D"];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  studentFg = this.fb.group({
    nationalCodeCtrl: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]], // formControl
    firstNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    ageCtrl: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
    payeTahsiliCtrl: ['', Validators.required],
    passWordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    namePedarCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]]
  });

  get NationalCodeCtrl(): FormControl {
    return this.studentFg.get('nationalCodeCtrl') as FormControl;
  }
  get FirstNameCtrl(): FormControl {
    return this.studentFg.get('firstNameCtrl') as FormControl;
  }
  get LastNameCtrl(): FormControl {
    return this.studentFg.get('lastNameCtrl') as FormControl;
  }
  get AgeCtrl(): FormControl {
    return this.studentFg.get('ageCtrl') as FormControl;
  }
  get PayeTahsili(): FormControl {
    return this.studentFg.get('payeTahsiliCtrl') as FormControl;
  }
  get PassWord(): FormControl {
    return this.studentFg.get('passWordCtrl') as FormControl;
  }
  get NamePedar(): FormControl {
    return this.studentFg.get('namePedarCtrl') as FormControl;
  }

  registerStudent(): void {
    console.log(this.studentFg.value);

    let student: Student = {
      nationalCode: this.NationalCodeCtrl.value,
      firstName: this.FirstNameCtrl.value,
      lastName: this.LastNameCtrl.value,
      age: this.AgeCtrl.value,
      payeTahsili: this.PayeTahsili.value,
      passWord: this.PassWord.value,
      namePedar: this.NamePedar.value
    }

    this.http.post<Student>('http://localhost:5000/api/student/register', student).subscribe(
      {
        next: response => {
          this.studentRes = response;
          console.log(this.studentRes);
        }
      }
    );

    this.studentFg.reset();
  }

  ClearForm(): void {
    this.studentFg.reset();
  }
}