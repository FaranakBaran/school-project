import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStaff } from 'src/app/models/loginStaff.model';

@Component({
  selector: 'app-login-school-staff-page',
  templateUrl: './login-school-staff-page.component.html',
  styleUrls: ['./login-school-staff-page.component.scss']
})
export class LoginSchoolStaffPageComponent {
  globLoginStaff: LoginStaff | undefined;
  globError: string | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  loginStaffFg = this.fb.group({
    personalCodeCtrl: ['', [Validators.required, Validators.min(3), Validators.maxLength(10)]],
    passWordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
  });

  get PersonalCodeCtrl(): FormControl {
    return this.loginStaffFg.get('personalCodeCtrl') as FormControl;
  }
  get PassWordCtrl(): FormControl {
    return this.loginStaffFg.get('passWordCtrl') as FormControl;
  }

  loginStaff(): void {
    console.log(this.loginStaffFg.value);

    let loginStaff: LoginStaff = {
      personalCode: this.PassWordCtrl.value,
      passWord: this.PassWordCtrl.value
    }

    this.http.post<LoginStaff>('http://localhost:5000/api/login-school-staff-page', loginStaff).subscribe(
      {
        next: response => {
          this.globLoginStaff = response;
          this.router.navigateByUrl('/sign-in-school-staff');
        },
        error: errObj => {
          console.log(errObj.status, ":", errObj.error);
          this.globError = errObj.error;
        }
      }
    )
    this.loginStaffFg.reset();
  }

  clearForm(): void {
    this.loginStaffFg.reset();
  }
}
