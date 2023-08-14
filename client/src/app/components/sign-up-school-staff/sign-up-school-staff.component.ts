import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { SchoolStaff } from 'src/app/models/schoolStaff.model'

@Component({
  selector: 'app-sign-in-school-staff',
  templateUrl: './sign-up-school-staff.component.html',
  styleUrls: ['./sign-up-school-staff.component.scss']
})
export class SignUpSchoolStaffComponent {
  schoolStaffRes: SchoolStaff | undefined;

  educations: string[] = ["Diploma", "Bachlor", "Master", "PH.D"];
  jobTitle: string[] = ["Teacher", "Manager", "Assistant"];

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  schoolStaffFg = this.fb.group({
    nationalCodeCtrl: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]], // formControl
    firstNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastNameCtrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    ageCtrl: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
    educationCtrl: ['', Validators.required],
    personalCodeCtrl: ['', [Validators.required, Validators.min(3), Validators.maxLength(10)]],
    passWordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    jobTitleCtrl: ['', Validators.required]
  })

  get NationalCodeCtrl(): FormControl {
    return this.schoolStaffFg.get('nationalCodeCtrl') as FormControl;
  }
  get FirstNameCtrl(): FormControl {
    return this.schoolStaffFg.get('firstNameCtrl') as FormControl;
  }
  get LastNameCtrl(): FormControl {
    return this.schoolStaffFg.get('lastNameCtrl') as FormControl;
  }
  get AgeCtrl(): FormControl {
    return this.schoolStaffFg.get('ageCtrl') as FormControl;
  }
  get EducationCtrl(): FormControl {
    return this.schoolStaffFg.get('educationCtrl') as FormControl;
  }
  get PersonalCodeCtrl(): FormControl {
    return this.schoolStaffFg.get('personalCodeCtrl') as FormControl;
  }
  get PassWordCtrl(): FormControl {
    return this.schoolStaffFg.get('passWordCtrl') as FormControl;
  }
  get JobTitleCtrl(): FormControl {
    return this.schoolStaffFg.get('jobTitleCtrl') as FormControl;
  }

  signInSchoolStaff(): void {
    console.log(this.schoolStaffFg.value);

    let schoolStaff: SchoolStaff = {
      nationalCode: this.NationalCodeCtrl.value,
      firstName: this.FirstNameCtrl.value,
      lastName: this.LastNameCtrl.value,
      age: this.AgeCtrl.value,
      education: this.EducationCtrl.value,
      personalCode: this.PersonalCodeCtrl.value,
      passWord: this.PassWordCtrl.value,
      jobTitle: this.JobTitleCtrl.value
    }

    this.http.post<SchoolStaff>('http://localhost:5000/api/schoolstaff/signin', schoolStaff).subscribe(
      {
        next: response => {
          this.schoolStaffRes = response;
          console.log(this.schoolStaffRes);
        }
      }
    );

    this.schoolStaffFg.reset();
  }

  ClearForm(): void {
    this.schoolStaffFg.reset();
  }
}
