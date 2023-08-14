import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { LoginStudentPageComponent } from './components/login-student-page/login-student-page.component';
import { LoginSchoolStaffPageComponent } from './components/login-school-staff-page/login-school-staff-page.component';
import { SignUpStudentComponent } from './components/sign-up-student/sign-up-student.component';
import { SignUpSchoolStaffComponent } from './components/sign-up-school-staff/sign-up-school-staff.component';
import { ListStaffsComponent } from './components/list-staffs/list-staffs.component';
import {SignUpAdminComponent}  from './components/sign-up-admin/sign-up-admin.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ListClassComponent } from './components/list-class/list-class.component';
import { ListAcademicMonthComponent } from './components/list-academic-month/list-academic-month.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'list-students', component: ListStudentsComponent },
  { path: 'list-staffs', component: ListStaffsComponent },
  { path: 'login-school-staff-page', component: LoginSchoolStaffPageComponent },
  { path: 'login-student-page', component: LoginStudentPageComponent },
  { path: 'sign-up-student', component: SignUpStudentComponent },
  { path: 'sign-up-school-staff', component: SignUpSchoolStaffComponent },
  {path: 'sign-up-admin', component: SignUpAdminComponent},
  {path: 'login-admin', component: LoginAdminComponent},
  {path: 'admin-profile', component: AdminProfileComponent},
  {path: 'list-class', component: ListClassComponent},
  {path: 'list-academic-month', component: ListAcademicMonthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
