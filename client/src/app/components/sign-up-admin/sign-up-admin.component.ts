import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin.model';

@Component({
  selector: 'app-sign-up-admin',
  templateUrl: './sign-up-admin.component.html',
  styleUrls: ['./sign-up-admin.component.scss']
})
export class SignUpAdminComponent {
  adminRes: Admin | undefined;

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

  registerAdmin(): void {
    console.log(this.adminFg.value);

    let admin: Admin = {
      email: this.EmailCtrl.value,
      password: this.PassWordCtrl.value,
      confirmPassword: this.ConfirmPassWordCtrl.value
    }

    this.http.post<Admin>('http://localhost:5000/api/admin/register', admin).subscribe(
      {
        next: response => {
          this.adminRes = response;
          console.log(this.adminRes);
        }
      }
    )
    this.adminFg.reset();
  }

  clearForm(): void {
    this.adminFg.reset();
  }
}
