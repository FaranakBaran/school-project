import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  adminRes: Admin | undefined;
  globError: string | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  adminFg = this.fb.group({
    emailCtrl: ['', [Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,5})+)$/)]],
    passWordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    confirmPasswordCtrl: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
  });

  get EmailCtrl(): FormControl {
    return this.adminFg.get('emailCtrl') as FormControl;
  }
  get PassWordCtrl(): FormControl {
    return this.adminFg.get('passWordCtrl') as FormControl;
  }
  get ConfirmPassWordCtrl(): FormControl {
    return this.adminFg.get('confirmPasswordCtrl') as FormControl;
  }

  loginAdmin(): void {
    console.log(this.adminFg.value);

    let admin: Admin = {
      email: this.EmailCtrl.value,
      password: this.PassWordCtrl.value,
      confirmPassword: this.ConfirmPassWordCtrl.value
    }

    this.http.post<Admin>('http://localhost:5000/api/loginadmin', admin).subscribe(
      {
        next: response => {
          this.adminRes = response;
          this.router.navigateByUrl('')
        },
        error: errObj => {
          console.log(errObj.status, ":", errObj.error);
          this.globError = errObj.error;
        }
      }
    )
    this.adminFg.reset();
  }

  clearForm(): void {
    this.adminFg.reset();
  }
}
