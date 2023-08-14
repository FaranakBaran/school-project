import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStudent } from 'src/app/models/loginStudent.model';

@Component({
  selector: 'app-login-student-page',
  templateUrl: './login-student-page.component.html',
  styleUrls: ['./login-student-page.component.scss']
})
export class LoginStudentPageComponent {
  globLoginStudent: LoginStudent | undefined;
  globError: string | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  loginStudentFg = this.fb.group({
    nationalCodeCtrl: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    passWordctrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
  });

  get NationalCodeCtrl(): FormControl {
    return this.loginStudentFg.get('nationalCodeCtrl') as FormControl;
  }
  get PassWordCtrl(): FormControl {
    return this.loginStudentFg.get('passWordctrl') as FormControl;
  }

  loginStudent(): void {
    console.log(this.loginStudentFg.value);

    let loginStudent: LoginStudent = {
      nationalCode: this.NationalCodeCtrl.value,
      passWord: this.PassWordCtrl.value
    }

    this.http.post<LoginStudent>('http://localhost:5000/api/login-student-page', loginStudent).subscribe(
      {
        next: response => {
          this.globLoginStudent = response;
          this.router.navigateByUrl('/sign-in-student');
        },
        error: errObj => {
          console.log(errObj.status, ":", errObj.error);
          this.globError = errObj.error;
        }
      }
    )
    this.loginStudentFg.reset();
  }

  clearForm(): void {
    this.loginStudentFg.reset();
  }
}
